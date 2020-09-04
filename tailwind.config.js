module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    future: {
        removeDeprecatedGapUtilities: true,
    },
    theme: {
        extend: {
            fontFamily: {
                tesla: ['Tesla', 'sans-serif'],
                rubik: ['Rubik', 'sans-serif'],
                rubikMed: ["'Rubik Medium'", 'sans-serif'],
                rubikBold: ["'Rubik Bold'", 'sans-serif'],
            },
        },
    },
    variants: {},
    plugins: [],
};
