// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "360px",              // NEW breakpoint for small phones
      ...defaultTheme.screens,  // sm, md, lg, xl, 2xl
    },
    extend: {},
  },
  plugins: [],
};