module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            tesla: ['Tesla', 'sans-serif'],
            rubik: ['Rubik', 'sans-serif'],
            rubikMed: ["'Rubik Medium'", 'sans-serif'],
            rubikBold: ["'Rubik Bold'", 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#D8E0F0',
                title: '#000052',
                background: '#E5E5E5',
                subtitle: '#151627',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
