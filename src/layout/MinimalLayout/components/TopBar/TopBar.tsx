import { FC } from 'react';
import Link from 'next/link';
import { SearchIcon } from 'components/icons';

// interface Props {}

const TopBar: FC = () => {
    const handleClick = () => {
        alert('Coming soon :)');
    };

    const handleScrollOneScreenDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className="w-full flex flex-row items-center justify-between pt-8 px-8 z-50 text-primary">
            <div className="font-tesla text-base md:text-3xl">
                <Link href="/">TRITSI</Link>
            </div>
            <div className="flex-grow" />
            <div className="font-axiforma font-semibold hidden md:block px-4 tracking-widest text-xl">
                <Link href="/">home</Link>
            </div>
            <div
                className="font-axiforma font-semibold hidden md:block px-4 tracking-widest text-xl outline-none"
                onClick={handleClick}
                role="button"
                tabIndex={0}
                onKeyDown={handleClick}
            >
                careers
            </div>
            <div
                className="font-axiforma font-semibold hidden md:block px-4 tracking-widest text-xl outline-none"
                onClick={handleScrollOneScreenDown}
                role="button"
                tabIndex={0}
                onKeyDown={handleScrollOneScreenDown}
            >
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
