import { Wizard, WizardStep } from 'components';
import Step1 from './Step1';
import Step2 from './Step2';

const ContactWizard = (): JSX.Element => {
    return (
        <div className="w-full h-full flex items-center justify-center custom-max-height max-w-4xl relative">
            <div className="absolute  bg-white opacity-50 w-full h-full z-10" />
            <div className="z-20 w-full max-w-lg">
                <Wizard
                    onSubmit={(el) => {
                        console.log(el);
                    }}
                >
                    <WizardStep>
                        <Step1 />
                    </WizardStep>
                    <WizardStep>
                        <Step2 />
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
