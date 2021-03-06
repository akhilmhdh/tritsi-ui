import React from 'react';

import Topbar from './components/TopBar';
import { Footer } from './components/Footer';
// interface Props {}

const MinimalLayout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col">
            <Topbar />
            <main>{children}</main>
            <div className="primary-background">
                <Footer />
            </div>
        </div>
    );
};

export default MinimalLayout;
