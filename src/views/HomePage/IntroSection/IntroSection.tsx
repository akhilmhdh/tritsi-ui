import { Button, Container } from 'components';
import { IntroMain } from 'components/Vectors';
import React from 'react';

const IntroSection: React.FC = () => {
    return (
        <Container>
            <div className="flex relative" style={{ height: 'calc(100vh)' }}>
                <div className="flex flex-grow flex-col justify-center items-start">
                    <div className="mb-28 ml-8 md:ml-24">
                        <div className="mb-3 text-base font-axiforma font-medium md:text-2xl text-primary">
                            Climb your career ladder with
                        </div>
                        <div className="mt-4 text-2xl font-axiforma font-bold leading-8 md:text-5xl">
                            Your personalised
                        </div>
                        <h1 className="mt-4 text-2xl font-axiforma font-bold leading-8 md:text-5xl">
                            skill assistant
                        </h1>
                        <Button className="text-white mt-8 px-12" rounded>
                            CONNECT
                        </Button>
                    </div>
                </div>
                <div
                    style={{ maxWidth: '640px' }}
                    className="w-full absolute bottom-0 right-0"
                >
                    <IntroMain />
                </div>
            </div>
        </Container>
    );
};

export default IntroSection;
