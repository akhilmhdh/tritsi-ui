import React from 'react';
import { SearchIcon } from 'components/icons';

// interface Props {}

const TopBar: React.FC = () => {
    return (
        <div className="bg-primary w-full flex flex-row items-center justify-between p-8 z-50">
            <div className="font-tesla text-base md:text-3xl">TRITSI</div>
            <div className="flex-grow" />
            <div className="font-axiforma font-bold hidden md:block px-4 tracking-widest text-xl">
                home
            </div>
            <div className="font-axiforma font-bold hidden md:block px-4 tracking-widest text-xl">
                careers
            </div>
            <div className="font-axiforma font-bold hidden md:block px-4 tracking-widest text-xl">
                about
            </div>
            <div className="font-axiforma font-bold hidden md:block px-4 tracking-widest ml-4">
                <div className="w-6 h-6">
                    <SearchIcon />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
