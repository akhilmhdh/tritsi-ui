import React from 'react';

const IntroSection: React.FC = () => {
    return (
        <div className="flex flex-col h-screen md:mt-40">
            <div className="mt-8 ml-8 text-2xl font-rubikMed md:text-5xl md:ml-32 md:mt-0 ">
                Your personalised
                <br />
                skill assistant
            </div>
            <div className="mt-3 ml-8 text-base font-rubik md:ml-32 md:text-4xl">
                Build your career, lorem ipsum
            </div>
        </div>
    );
};

export default IntroSection;
