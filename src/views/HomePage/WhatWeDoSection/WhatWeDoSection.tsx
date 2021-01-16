import React from 'react';
import clsx from 'clsx';
import { CareerCompass, FutureReady, InsiderInsight } from 'components/Vectors';
import { ScrollTrigger } from 'components/Animation';

const data = [
    {
        icon: <CareerCompass />,
        title: 'Your Career Compass',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut quaerat modi ullam, reiciendis ipsa officia doloribus
        corrupti delectus sint`,
    },
    {
        icon: <InsiderInsight />,
        title: 'Insider Insight',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut quaerat modi ullam, reiciendis ipsa officia doloribus
        corrupti delectus sint`,
    },
    {
        icon: <FutureReady />,
        title: 'Future Ready',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut quaerat modi ullam, reiciendis ipsa officia doloribus
        corrupti delectus sint`,
    },
    {
        image: '/images/future_ready.svg',
        title: 'Trend Forecast',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut quaerat modi ullam, reiciendis ipsa officia doloribus
        corrupti delectus sint`,
    },
];

// trendforecast when converted to image looses its gradients

const WhatWeDoSection: React.FC = () => {
    return (
        <div className="container mx-auto my-12 pt-12 ">
            {data.map((el, index, arr) => {
                if ((index + 1) % 2 === 0) return null;
                return (
                    <ScrollTrigger
                        delay={0}
                        key={index}
                        className="flex flex-col items-center justify-between md:items-end md:flex-row"
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
                                        style={{ maxHeight: '420px' }}
                                    />
                                )}
                            </div>
                            <div className="flex flex-col items-center mt-4 px-8 md:w-4/5 md:items-start">
                                <div className=" font-axiforma text-2xl font-bold">
                                    {el.title}
                                </div>
                                <div className="font-axiforma text-base font-medium mt-4">
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
                                    />
                                )}
                            </div>
                            <div className="flex flex-col items-center mt-4 px-8 md:w-4/5 md:items-start">
                                <div className="font-axiforma  text-2xl font-bold">
                                    {arr[index + 1].title}
                                </div>
                                <div className="font-axiforma  text-base font-medium mt-4">
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
