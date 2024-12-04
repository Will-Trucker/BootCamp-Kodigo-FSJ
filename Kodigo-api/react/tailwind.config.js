/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}

