module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            tesla: ['tesla', 'sans-serif'],
            axiforma: ['axiforma', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#3B3B96',
                title: '#000052',
                secondary: '#3B3B96',
                background: '#E5E5E5',
                subtitle: '#151627',
            },
            boxShadow: {
                blue: '3px 4px 4px rgba(93, 140, 211, 0.77)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
