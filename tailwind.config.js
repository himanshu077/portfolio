/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                primary: '#6919FF',
                neutrals: {
                    900: '#060918',
                    800: '#161A2C',
                    700: '#23263B',
                    600: '#2E364F',
                    500: '#4D5775',
                    400: '#6F7A9B',
                    300: '#96A1C0',
                    200: '#C7D0E5',
                    100: '#F0F2FE',
                    50: '#FFFEF9',
                },
                success: '#00F090',
                warning: '#FFDC30',
                error: '#FF2E5B',
            },
            borderWidth: {
                0.5: '0.5px',
            },
            minHeight: {
                /* @ts-ignore - required fallback for incremental adoption */
                screen: ['100vh', '100svh'],
            },
            maxHeight: {
                /* @ts-ignore - required fallback for incremental adoption */
                screen: ['100vh', '100svh'],
            },
            height: {
                /* @ts-ignore - required fallback for incremental adoption */
                screen: ['100vh', '100svh'],
            },
            backgroundImage: {
                'radial-highlight':
                    'radial-gradient(circle at 50% 100%, rgba(46, 54, 79, 0.5) 1%, rgba(6, 9, 24, 1) 100%)',
            },
        },
    },
    plugins: [],
}

