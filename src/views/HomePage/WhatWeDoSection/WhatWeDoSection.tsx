import React from 'react';
import clsx from 'clsx';
import { FutureReady, InsiderInsight, CareerCompass } from 'components/Vectors';
import { ScrollTrigger } from 'components/Animation';
import { Typography } from 'components';

const data = [
    {
        icon: <CareerCompass />,
        title: 'Your Career Compass',
        content: ` Not sure of your possible career directions? 
        Relax and let our AI-powered engine find the possible job roles for the skills you possess.`,
    },
    {
        icon: <InsiderInsight />,
        title: 'Insider Insight',
        content: `Take a seat and let our analytics and visualizations convince you of our recommendations `,
    },
    {
        icon: <FutureReady />,
        title: 'Future Ready',
        content: `Chosen your career path? 
        We recommend the additional skills you need to achieve your dream job`,
    },
    {
        image: '/images/future_ready.svg',
        title: 'Trend Forecast',
        content: `Wanna be a step ahead in the job market? 
        You might wanna take a look at our skill demand predictions and forecasts`,
    },
];

// trendforecast when converted to image looses its gradients

const WhatWeDoSection: React.FC = () => {
    return (
        <div className="container mx-auto my-12 pt-12" id="whatWeDo">
            <Typography variant="sectionTitle" className="mb-16 md:mb-24">
                What We Do
            </Typography>
            {data.map((el, index, arr) => {
                if ((index + 1) % 2 === 0) return null;
                return (
                    <ScrollTrigger
                        delay={0}
                        key={index}
                        className="flex flex-col items-center justify-between md:items-end md:flex-row md:m-12"
                    >
                        <div
                            className={clsx('flex flex-col mb-12 items-center')}
                        >
                            <div
                                style={{ maxWidth: '240px', width: '100%' }}
                                id="container"
                            >
                                {el?.icon || (
                                    <img
                                        src={el?.image}
                                        alt="logo"
                                        style={{ maxHeight: '340px' }}
                                    />
                                )}
                            </div>
                            <div className="flex flex-col items-center mt-8 px-8 md:w-4/5 md:items-start">
                                <div className=" font-axiforma text-2xl font-bold text-center md:text-left">
                                    {el.title}
                                </div>
                                <div className="font-axiforma text-base font-medium mt-4 text-center md:text-left">
                                    {el.content}
                                </div>
                            </div>
                        </div>
                        <div
                            className={clsx('flex flex-col mb-12 items-center')}
                        >
                            <div style={{ maxWidth: '240px', width: '100%' }}>
                                {arr[index + 1]?.icon || (
                                    <img
                                        src={arr[index + 1]?.image}
                                        alt="logo"
                                        style={{ maxHeight: '400px' }}
                                    />
                                )}
                            </div>
                            <div className="flex flex-col items-center mt-8 px-8 md:w-4/5 md:items-start ">
                                <div className="font-axiforma  text-2xl font-bold text-center md:text-left">
                                    {arr[index + 1].title}
                                </div>
                                <div className="font-axiforma  text-base font-medium mt-4 text-center md:text-left">
                                    {arr[index + 1].content}
                                </div>
                            </div>
                        </div>
                    </ScrollTrigger>
                );
            })}
        </div>
    );
};

export default WhatWeDoSection;
