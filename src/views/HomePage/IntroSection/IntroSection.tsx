import { Button, Container } from 'components';
import { IntroMain } from 'components/Vectors';
import React from 'react';

const IntroSection: React.FC = () => {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight - window.innerHeight - 155,
            behavior: 'smooth',
        });
    };

    return (
        <Container>
            <div
                className="flex relative"
                style={{ height: 'calc(100vh - 72px)' }}
            >
                <div className="flex flex-grow flex-col justify-center items-start">
                    <div className="mb-28 ml-8 md:ml-24">
                        <div className="mt-4 text-2xl font-axiforma font-bold leading-8 md:text-6xl">
                            Your personalised
                        </div>
                        <h1 className="mt-4 text-2xl font-axiforma font-bold leading-8 md:text-6xl">
                            skill assistant
                        </h1>
                        <div className="mt-3 text-base font-axiforma font-medium md:text-xl text-primary">
                            Data-driven skill recommendations
                            <br /> for your next job role
                        </div>
                        <Button
                            className="text-white mt-8 md:mt-16 px-12"
                            rounded
                            onClick={scrollToBottom}
                        >
                            CONNECT
                        </Button>
                    </div>
                </div>
                <div
                    style={{ maxWidth: '640px' }}
                    className="w-full absolute bottom-0 md:bottom-12 right-0"
                >
                    <IntroMain />
                </div>
            </div>
        </Container>
    );
};

export default IntroSection;
