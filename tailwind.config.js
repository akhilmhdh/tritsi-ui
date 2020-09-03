module.exports = {
    purge: [
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    future: {
        removeDeprecatedGapUtilities: true,
    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
};
