const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {},
        screens: {
            xs: '480px',
            ...defaultTheme.screens,
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
