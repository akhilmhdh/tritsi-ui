import React from 'react';

import Topbar from './components/TopBar';
// interface Props {}

const MinimalLayout: React.FC = ({ children }) => {
    return (
        <div>
            <Topbar />
            <main>{children}</main>
            <style jsx>{`
                main {
                    padding-top: 60px;
                }
            `}</style>
        </div>
    );
};

export default MinimalLayout;
