import React from 'react';

// interface Props {}

const TopBar: React.FC = () => {
    return (
        <div className="absolute w-full flex flex-row items-center justify-between px-4 py-4 md:pt-8 md:px-10">
            <div className="font-tesla text-base md:text-3xl">TRITSI</div>
            <div className="flex-grow" />
            <div className="font-rubikMed font-medium hidden md:block px-4 tracking-widest">
                ABOUT
            </div>
            <div className="font-rubikMed font-medium hidden md:block px-4 tracking-widest">
                LOGIN
            </div>
        </div>
    );
};

export default TopBar;
