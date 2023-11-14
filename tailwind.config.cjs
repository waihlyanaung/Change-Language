/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
         pacifico:['Pacifico', 'cursive'],
         'saira-condensed': ['Saira Condensed', 'sans-serif']
    },
    },
  },
  plugins: [],
};
