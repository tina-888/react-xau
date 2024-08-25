/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        slideLeft: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        push: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideRight: "slideRight 30s linear infinite",
        slideLeft: "slideLeft 30s linear infinite",
        push: "push 0.2s ease-in-out",
      },
      colors: {
        "custom-black": " #222831",
        "custom-blackgrey": "#393E46",
        "custom-gold-rod": "#D69900",
        "custom-darkgold": "#636363",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"'],
        iceland: ['"Iceland"'],
      },
    },
  },
  plugins: [],
};
