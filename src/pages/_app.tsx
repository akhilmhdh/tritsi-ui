import React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css';
import '../styles/tailwind.base.css';
import 'swiper/swiper.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default MyApp;
