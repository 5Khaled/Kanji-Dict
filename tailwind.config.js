/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-10vh)" },
          "100%": { transform: "translateY(110vh)" },
        },
      },
    },
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  darkMode: "selector",
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".color-scheme-light": {
          colorScheme: "light",
        },
        ".color-scheme-dark": {
          colorScheme: "dark",
        },
      });
    },
  ],
};
