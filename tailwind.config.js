/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#08111f',
        },
        accent: {
          500: '#7c6ae8',
          600: '#6b5ae7',
          700: '#5548db',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 24, 42, 0.12)',
      },
      backgroundImage: {
        radial: 'radial-gradient(circle at top, rgba(124, 106, 232, 0.2), transparent 45%)',
      },
    },
  },
  plugins: [],
};
