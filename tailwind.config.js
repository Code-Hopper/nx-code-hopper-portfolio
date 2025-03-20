/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",  // for Next.js 13+ (App Router)
        "./pages/**/*.{js,ts,jsx,tsx}", // for Next.js 12 or Pages Router
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                spaceMono: ['var(--font-space-mono)']
            }
        },
    },
    plugins: [],
};  