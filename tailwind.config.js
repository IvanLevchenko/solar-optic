/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,json}"],
  theme: {
    extend: {
      colors: {
        "base-blue": "#000871",
        "accent-yellow": "#E9F610",
        "background-gray": "#F2F2F2",
      },
    },
  },
  plugins: [],
};
