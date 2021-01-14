import { Container } from 'components';
import { ContactUs } from 'components/Vectors';
import { ContactWizard } from './components/ContactWizard';

const ContactUsSection = (): JSX.Element => {
    return (
        <div className="primary-background py-8">
            <Container>
                <div className="contact-mobile w-full relative">
                    <ContactUs />
                    <div className="absolute top-0 left-0 w-full h-full flex mt-4 justify-center">
                        <ContactWizard />
                    </div>
                </div>
            </Container>
            <style jsx>{`
                .contact-mobile {
                    height: calc(100vh - 60px);
                }
            `}</style>
        </div>
    );
};

export default ContactUsSection;
