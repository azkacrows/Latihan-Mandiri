/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./dist/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                'fira-code': ['Fira Code', 'monospace'],
            },
        },
    },
    plugins: [],
};
