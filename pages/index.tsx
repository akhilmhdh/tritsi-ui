import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Tritsi</title>
            </Head>
            <main>
                <h2 className="text-5xl mx-auto text-blue-500 text-center">
                    Tritsi
                </h2>
            </main>
        </div>
    );
};

export default Home;
