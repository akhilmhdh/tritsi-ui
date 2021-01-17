import React from 'react';
import Head from 'next/head';

import MinimalLayout from '../layout/MinimalLayout';

import IntroSection from 'views/HomePage/IntroSection';
import WhatWeDoSection from 'views/HomePage/WhatWeDoSection';
import { ContactUsSection } from 'views/HomePage/ContactUsSection';
import { FactsSection } from 'views/HomePage/FactsSection';

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Tritsi</title>
                <link rel="icon" type="image/jpg" href="/images/logo.jpg" />
            </Head>
            <main>
                <MinimalLayout>
                    <IntroSection />
                    <WhatWeDoSection />
                    <FactsSection />
                    <ContactUsSection />
                </MinimalLayout>
            </main>
        </div>
    );
};

export default Home;
