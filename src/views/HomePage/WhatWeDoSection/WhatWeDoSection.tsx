import React from 'react';
import clsx from 'clsx';
import { CareerCompass, FutureReady } from 'components/Vectors';

const data = [
    {
        icon: <CareerCompass />,
        title: 'Your Career Compass',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut quaerat modi ullam, reiciendis ipsa officia doloribus
        corrupti delectus sint`,
    },
    {
        icon: <CareerCompass />,
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
        icon: <FutureReady />,
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
                        className="flex justify-between items-center"
                    >
                        <div
                            className={clsx(
                                'flex flex-col mb-12 mt-12 md:items-center md:mt-16 md:mb-16'
                            )}
                        >
                            <div style={{ width: '240px' }}>{el.icon}</div>
                            <div className="mt-4 md:w-2/3">
                                <div className="font-rubikMed text-2xl ml-12 mt-6">
                                    {el.title}
                                </div>
                                <div className="font-rubik text-base ml-12 mt-2">
                                    {el.content}
                                </div>
                            </div>
                        </div>
                        <div
                            className={clsx(
                                'flex flex-col mb-12 mt-12 md:items-center md:mt-16 md:mb-16'
                            )}
                        >
                            <div style={{ width: '240px' }}>
                                {arr[index + 1].icon}
                            </div>
                            <div className="mt-4 md:w-2/3">
                                <div className="font-rubikMed text-2xl ml-12 mt-6">
                                    {arr[index + 1].title}
                                </div>
                                <div className="font-rubik text-base ml-12 mt-2">
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
