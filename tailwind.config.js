/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                background: '#0f0f0f',
                surface: '#1a1a1a',
                border: '#222222',
                primary: '#ededed',
                secondary: '#a1a1a1',
                accent: '#3b82f6', // Subtle blue for interactive elements
            },
        },
    },
    plugins: [],
}
