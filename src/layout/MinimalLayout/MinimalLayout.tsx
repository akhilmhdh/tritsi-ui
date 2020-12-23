import React from 'react';

import Topbar from './components/TopBar';
// interface Props {}

const MinimalLayout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col">
            <Topbar />
            <main>{children}</main>
        </div>
    );
};

export default MinimalLayout;
