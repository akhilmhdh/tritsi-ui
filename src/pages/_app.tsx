import React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css';
import '../styles/tailwind.base.css';
import 'swiper/swiper.min.css';
// import 'react-perfect-scrollbar/dist/css/styles.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default MyApp;
