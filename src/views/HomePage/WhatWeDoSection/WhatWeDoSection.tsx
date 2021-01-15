import React from 'react';
import clsx from 'clsx';
import {
    CareerCompass,
    FutureReady,
    InsiderInsight,
    TrendForecast,
} from 'components/Vectors';

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
        icon: <TrendForecast />,
        title: 'Trend Forecast',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut quaerat modi ullam, reiciendis ipsa officia doloribus
        corrupti delectus sint`,
    },
];

const WhatWeDoSection: React.FC = () => {
    return (
        <div className="container mx-auto">
            {data.map((el, index, arr) => {
                if ((index + 1) % 2 === 0) return null;
                return (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-between md:items-end md:flex-row"
                    >
                        <div
                            className={clsx('flex flex-col mb-12 items-center')}
                        >
                            <div style={{ minWidth: '240px' }}>{el.icon}</div>
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
                            className={clsx(
                                'flex flex-col mb-12 items-center '
                            )}
                        >
                            <div style={{ minWidth: '240px' }}>
                                {arr[index + 1].icon}
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
                    </div>
                );
            })}
        </div>
    );
};

export default WhatWeDoSection;
