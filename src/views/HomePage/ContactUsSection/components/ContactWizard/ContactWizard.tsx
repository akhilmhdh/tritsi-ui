import { Wizard, WizardStep } from 'components';
import { FadeIn } from 'components/Animation';
import { FC } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

type ContactWizardProps = {
    onSubmit: () => Promise<void>;
};

const ContactWizard: FC<ContactWizardProps> = ({ onSubmit }) => {
    return (
        <div className="w-full h-full flex items-center justify-center custom-max-height max-w-4xl relative">
            <div className="absolute  bg-white opacity-50 w-full h-full z-10" />
            <div className="z-20 w-full max-w-lg">
                <Wizard
                    onSubmit={(el) => {
                        console.log(el);
                        onSubmit();
                    }}
                >
                    <WizardStep>
                        <FadeIn delay={0}>
                            <Step1 />
                        </FadeIn>
                    </WizardStep>

                    <WizardStep>
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
