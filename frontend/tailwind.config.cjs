/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Inter var, sans-serif',
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
    },
    extend: {},
  },
  plugins: [],
};
