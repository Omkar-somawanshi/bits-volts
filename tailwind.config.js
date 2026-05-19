/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#B9FF66',  // Neon Lime Accent
        'brand-dark': '#191A23',     // Brutalist Dark Slate
        'brand-light': '#F3F3F3',    // Light Section Grey
      },
      fontFamily: {
        'main': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}