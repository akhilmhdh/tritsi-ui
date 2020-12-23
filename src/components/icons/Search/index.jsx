import React from 'react';

function SearchIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
            <path
                stroke="#151627"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M14.667 25.333c5.89 0 10.666-4.775 10.666-10.666S20.558 4 14.667 4 4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666zM28 28l-5.8-5.8"
            ></path>
        </svg>
    );
}

export default React.memo(SearchIcon);
