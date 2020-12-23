import React from 'react';
import Head from 'next/head';

import MinimalLayout from '../layout/MinimalLayout';

import IntroSection from '../views/HomePage/IntroSection';
import WhatWeDoSection from '../views/HomePage/WhatWeDoSection';

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Tritsi</title>
            </Head>
            <main>
                <MinimalLayout>
                    <IntroSection />
                    <WhatWeDoSection />
                </MinimalLayout>
            </main>
        </div>
    );
};

export default Home;
