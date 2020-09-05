import React from 'react';
import clsx from 'clsx';

const data = [
    {
        image: '/images/people_compass.jpg',
        title: 'Your Career Compass',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut quaerat modi ullam, reiciendis ipsa officia doloribus
        corrupti delectus sint`,
        reverse: false,
    },
    {
        image: '/images/people_compass.jpg',
        title: 'Your Career Compass',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut quaerat modi ullam, reiciendis ipsa officia doloribus
        corrupti delectus sint`,
        reverse: true,
    },
    {
        image: '/images/people_compass.jpg',
        title: 'Your Career Compass',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut quaerat modi ullam, reiciendis ipsa officia doloribus
        corrupti delectus sint`,
        reverse: false,
    },
];

const WhatWeDoSection: React.FC = () => {
    return (
        <div className="container mx-auto">
            {data.map((el, index) => (
                <div
                    className={clsx(
                        'flex flex-col mb-12 mt-12 md:flex-row md:justify-center md:items-center md:mt-16 md:mb-16',
                        el.reverse && 'md:flex-row-reverse'
                    )}
                    key={index}
                >
                    <div>
                        <img
                            src={el.image}
                            className="w-full h-full mx-auto rounded-full"
                            alt="bussiness man"
                        />
                        <style jsx>{`
                            img {
                                max-width: 240px;
                                max-height: 240px;
                            }
                        `}</style>
                    </div>
                    <div className="mt-4 w-1/2">
                        <div className="font-rubikMed text-2xl ml-12 mt-6">
                            {el.title}
                        </div>
                        <div className="font-rubik text-base ml-12 mt-2">
                            {el.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WhatWeDoSection;
