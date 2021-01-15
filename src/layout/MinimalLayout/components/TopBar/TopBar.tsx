import React from 'react';
import { SearchIcon } from 'components/icons';

// interface Props {}

const TopBar: React.FC = () => {
    return (
        <div className="w-full flex flex-row items-center justify-between pt-8 px-8 z-50 text-primary">
            <div className="font-tesla text-base md:text-3xl">TRITSI</div>
            <div className="flex-grow" />
            <div className="font-axiforma font-semibold hidden md:block px-4 tracking-widest text-xl">
                home
            </div>
            <div className="font-axiforma font-semibold hidden md:block px-4 tracking-widest text-xl">
                careers
            </div>
            <div className="font-axiforma font-semibold hidden md:block px-4 tracking-widest text-xl">
                about
            </div>
            <div className="font-axiforma font-semibold hidden md:block px-4 tracking-widest ml-4">
                <div className="w-6 h-6">
                    <SearchIcon />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
