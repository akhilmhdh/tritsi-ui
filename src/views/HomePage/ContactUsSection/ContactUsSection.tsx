import axios from 'axios';
import { Container } from 'components';
import { ContactUs } from 'components/Vectors';
import { useState } from 'react';
import { ContactWizard } from './components/ContactWizard';

type ContactUsForm = {
    email: string;
    subject: string;
    message?: string;
};

const ContactUsSection = (): JSX.Element => {
    const [hideForm, setHideForm] = useState(false);

    const onSubmit = async (formData: ContactUsForm): Promise<void> => {
        try {
            await axios.post('/api/email', formData);
            setHideForm(true);
        } catch (error) {
            console.log(error);
        }
        return;
    };

    return (
        <div className="primary-background py-8 mt-24">
            <Container>
                <div className="contact-mobile w-full relative">
                    <ContactUs successAnimation={hideForm} />
                    {!hideForm && (
                        <div className="absolute top-0 left-0 w-full h-full flex mt-4 justify-center">
                            <ContactWizard onSubmit={onSubmit} />
                        </div>
                    )}
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
