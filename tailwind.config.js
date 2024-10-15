/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-10vh)" },
          "100%": { transform: "translateY(110vh)" },
        },
      },
      fontSize: {
        "2xs": "0.5rem",
      },
      minHeight: {
        "outlet-dvh": "calc(100dvh - 60px)",
      },
      fontFamily: {
        mplus: ["Mplus1M", "sans-serif"],
        japaneseRadicals: ["JapaneseRadicals", "sans-serif"],
      },
    },
    screens: {
      "2xs": "400px",
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
    function ({ addVariant }) {
      addVariant("can-hover", "@media (hover: hover)");
    },
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
