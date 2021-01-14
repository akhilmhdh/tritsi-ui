import React from 'react';

const IntroSection: React.FC = () => {
    return (
        <div className="flex h-screen primary-background ">
            <div className="flex flex-grow flex-col justify-center items-start">
                <div className="mb-28 ml-8 md:ml-24">
                    <div className="mb-3 text-base font-axiforma font-semibold  md:text-3xl">
                        Climb your career ladder with
                    </div>
                    <div className="mt-8 text-2xl font-axiforma font-bold leading-5 md:text-5xl md:mt-0">
                        Your personalised
                        <br />
                        skill assistant
                    </div>
                </div>
            </div>
            <div className="self-end max-w-xl">
                <img
                    src="/images/handhold.png"
                    alt="hand hold"
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};

export default IntroSection;
