import React from 'react';
import Head from 'next/head';

import MinimalLayout from '../src/layout/MinimalLayout';

import IntroSection from '../src/pages/HomePage/IntroSection';
import WhatWeDoSection from '../src/pages/HomePage/WhatWeDoSection';

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
