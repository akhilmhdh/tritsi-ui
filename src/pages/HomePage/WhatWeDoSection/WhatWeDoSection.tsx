import React from 'react';

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
        reverse: false,
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
        <div className="container">
            {data.map((el, index) => (
                <div className="flex flex-col mb-12 mt-12" key={index}>
                    <div>
                        <img
                            src={el.image}
                            className="w-full h-full mx-auto"
                            alt="bussiness man"
                        />
                        <style jsx>{`
                            img {
                                max-width: 240px;
                                max-height: 240px;
                            }
                        `}</style>
                    </div>
                    <div className="mt-4">
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
