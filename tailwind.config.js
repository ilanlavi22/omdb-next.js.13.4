/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        mediaList: 'repeat(auto-fill, minmax(300px, 320px))',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        orange: '#f5c518',
      },
    },
  },
  plugins: [],
};
