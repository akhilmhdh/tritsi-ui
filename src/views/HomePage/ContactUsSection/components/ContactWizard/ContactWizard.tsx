import { Wizard, WizardStep } from 'components';
import { FadeIn } from 'components/Animation';
import { FC } from 'react';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Step1 from './Step1';
import Step2 from './Step2';

type ContactWizardProps = {
    onSubmit: () => Promise<void>;
};

const stepValidators = {
    step1: object().shape({
        email: string().email().required('Email is required'),
    }),
    step2: object().shape({
        subject: string().max(100).required('Subject is required'),
        message: string().max(250),
    }),
};

const ContactWizard: FC<ContactWizardProps> = ({ onSubmit }) => {
    return (
        <div className="w-full h-full flex items-center justify-center custom-max-height max-w-4xl relative px-4">
            <div className="absolute  bg-white opacity-50 w-full h-full z-10" />
            <div className="z-20 w-full max-w-lg">
                <Wizard
                    onSubmit={(el) => {
                        console.log(el);
                        onSubmit();
                    }}
                >
                    <WizardStep validation={yupResolver(stepValidators.step1)}>
                        <FadeIn delay={0}>
                            <Step1 />
                        </FadeIn>
                    </WizardStep>

                    <WizardStep validation={yupResolver(stepValidators.step2)}>
                        <FadeIn delay={0}>
                            <Step2 />
                        </FadeIn>
                    </WizardStep>
                </Wizard>
            </div>
            <style jsx>{`
                .custom-max-height {
                    max-height: 520px;
                }
            `}</style>
        </div>
    );
};

export default ContactWizard;
