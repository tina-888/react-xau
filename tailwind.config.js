/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      colors: {
        "gradient-start": "#292c35",
        "gradient-end": "#17181D",
        "custom-gold": "#DAA520",
      },
    },
  },
  plugins: [],
};
