/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'smm': {'min': '0px','max': '300px'},
        'mm': {'min': '300px','max': '400px'},
        'lm': {'min': '400px','max': '500px'},
        'st': {'min': '500px','max': '650px'},
        'mt': {'min': '650px','max': '800px'},
        'lt': {'min': '800px','max': '950px'},
        'C': {'min': '950px','max': '1024px'}
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}
