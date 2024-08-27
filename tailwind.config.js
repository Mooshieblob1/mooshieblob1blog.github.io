/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include the root index.html file
    "./assets/css/style.css", // Include the CSS file
    "./assets/js/script.js", // Include the JS file
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/images/bg.webp')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
