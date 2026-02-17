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
                display: ['Inter', 'sans-serif'], // Added for semantic clarity
            },
            colors: {
                background: 'var(--bg)',
                surface: 'var(--surface)',
                border: 'var(--border)',
                text: 'var(--text)',
                muted: 'var(--muted)',
                accent: 'var(--accent)',
                'accent-soft': 'var(--accent-soft)',
            },
            transitionTimingFunction: {
                'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
            },
        },
    },
    plugins: [],
}
