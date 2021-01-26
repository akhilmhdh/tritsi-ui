/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import {
    DefaultValues,
    FieldValues,
    SubmitHandler,
    Resolver,
    UseFormMethods,
    useForm,
    UnpackNestedValue,
} from 'react-hook-form';
import { Transition } from 'react-transition-group';
import { TweenMax } from 'gsap';

const WizardContext = createContext({});

type WizardProps<T, G> = {
    children: React.ReactNode;
    onSubmit: SubmitHandler<T>;
    initialValues?: DefaultValues<G>;
    resolver?: Resolver<T>;
    buttonAlign?: 'left' | 'center' | 'right';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Wizard = <
    FormFieldType extends FieldValues,
    FormInitialValue extends FormFieldType
>({
    children,
    initialValues,
    onSubmit,
}: WizardProps<FormFieldType, FormInitialValue>): JSX.Element => {
    const wizardAllSteps = React.Children.toArray(children);
    const snapShot = useRef<Partial<FormFieldType>>({});
    const totalSteps = wizardAllSteps.length;
    const [stepNumber, setStepNumber] = useState(0);
    const [stateStep, setStateStep] = useState(true);
    const isLastStep = stepNumber === totalSteps - 1;
    const wizardStep = wizardAllSteps[stepNumber] as React.ReactElement;

    const hookFormMethods = useForm<FormFieldType>({
        resolver: wizardStep.props.validation,
        defaultValues: initialValues as any,
    });

    useEffect(() => {
        if (stepNumber in snapShot) {
            hookFormMethods.reset(snapShot.current[stepNumber]);
        } else {
            hookFormMethods.reset(initialValues as any);
        }
    }, [stepNumber]);

    const nextFormStep = (): void => {
        setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
    };

    const previousFormStep = (): void => {
        setStepNumber(Math.max(stepNumber - 1, 0));
    };

    const onFormSubmit: SubmitHandler<FormFieldType> = async (
        data: UnpackNestedValue<FormFieldType>
    ) => {
        if (wizardStep.props.onSubmit) {
            await wizardStep.props.onSubmit(data);
        }
        snapShot.current = { ...snapShot.current, [stepNumber]: data };
        if (!isLastStep) {
            setStateStep(false);
        } else {
            let req = {} as UnpackNestedValue<FormFieldType>;
            for (let snap = 0; snap < totalSteps; snap++) {
                req = { ...req, ...snapShot.current[snap] };
            }
            return onSubmit(req);
        }
    };

    return (
        <form
            onSubmit={hookFormMethods.handleSubmit(onFormSubmit)}
            className="h-full"
        >
            <div className="h-full flex flex-col">
                <WizardContext.Provider
                    value={{ ...hookFormMethods, previousFormStep, stepNumber }}
                >
                    <Transition<undefined>
                        timeout={500}
                        mountOnEnter
                        unmountOnExit
                        in={stateStep}
                        onExited={() => {
                            nextFormStep();
                            setStateStep(true);
                        }}
                        addEndListener={(
                            node: HTMLElement,
                            done: () => void
                        ) => {
                            if (!stateStep) {
                                TweenMax.to(node, 0.5, {
                                    y: 0,
                                    x: stateStep ? 0 : -200,
                                    autoAlpha: stateStep ? 1 : 0,
                                    onComplete: done,
                                });
                            }
                        }}
                    >
                        {wizardStep}
                    </Transition>
                </WizardContext.Provider>
            </div>
        </form>
    );
};

type WizardStepProps<T> = {
    children: React.ReactNode;
    onSubmit?: () => Promise<void>;
    validation?: Resolver<T>;
};

export const WizardStep = <T extends FieldValues>({
    children,
}: WizardStepProps<T>): JSX.Element => <>{children}</>;

export const useWizard = (): UseFormMethods =>
    useContext(WizardContext) as UseFormMethods;

export default Wizard;
