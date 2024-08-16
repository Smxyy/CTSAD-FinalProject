const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
        flowbite.content()
    ],
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'suwannaphum': ['Suwannaphum', 'serif']
            },
            colors: {
                'primary': '#0EBC87',
                'grays': '#747579',
                'second': '#F16622',
                'blues': '#230085'
            },
            heading: {
                h1: {
                    fontSize: '36px',
                    lineHeight: '2.5rem',
                    fontWeight: 'bold'
                },
                h4: {
                    fontSize: '24px',
                    lineHeight: '2rem',
                    fontWeight: 'semibold'
                }
            },


        },
    },
    plugins: [flowbite.plugin()],
}