/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  darkMode: 'media', // Usar 'media' para modo oscuro automático
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
};
