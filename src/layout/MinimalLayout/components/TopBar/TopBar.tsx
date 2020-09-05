import React from 'react';

// interface Props {}

const TopBar: React.FC = () => {
    return (
        <div className="absolute w-full flex flex-row content-center justify-between px-4 py-4">
            <div className="font-tesla text-base">TRITSI</div>
            <div className="flex-grow" />
            <div className="font-rubric hidden md:block px-4">About</div>
            <div className="font-rubric hidden md:block px-4">Login</div>
        </div>
    );
};

export default TopBar;
