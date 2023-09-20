/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
    container: {
      center: true,
      // padding: "1rem",
      screens: {
        // Apple screen size
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1500px",
        "3xl": "1920px",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  important: true,
};
