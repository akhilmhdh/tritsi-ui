import { memo } from 'react';

type LinkedinCircleProps = {
    className: string;
};

function LinkedinCircle({ className }: LinkedinCircleProps) {
    return (
        <svg
            width="32"
            height="32"
            fill="none"
            viewBox="2 0 50 46"
            className={className}
        >
            <path
                fill="#1A1919"
                d="M25.5 0C11.419 0 0 10.3 0 23s11.419 23 25.5 23S51 35.7 51 23 39.581 0 25.5 0zm-7.41 34.77h-6.21V17.916h6.21V34.77zm-3.105-19.154h-.04c-2.085 0-3.432-1.294-3.432-2.911 0-1.654 1.389-2.912 3.513-2.912 2.125 0 3.432 1.258 3.473 2.912 0 1.617-1.348 2.911-3.514 2.911zM40.483 34.77h-6.21v-9.016c0-2.266-.898-3.811-3.146-3.811-1.715 0-2.737 1.042-3.186 2.048-.164.36-.204.864-.204 1.367v9.412h-6.21s.081-15.272 0-16.853h6.21v2.386c.825-1.148 2.302-2.781 5.597-2.781 4.086 0 7.15 2.408 7.15 7.584v9.663z"
            ></path>
        </svg>
    );
}

export default memo(LinkedinCircle);
