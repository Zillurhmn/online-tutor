/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-bg": "#e6c229",
        "text": "#e6c229",
      }
    },
  },
  plugins: [require("daisyui")],
}
