/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2261AE",
        light: "#F9F9F9",
        grey: "#58595B",
        lgrey: "#9F9F9F",
        red: "#ED3237",
        activecolor: "#0075cee9",
      },

      boxShadow: {
        lightShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },

      maxWidth: {
        "custom-xl": "1550px",
      },
      animation: {
        float: "float 2s ease-in-out infinite",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        mdP: "850px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      animation: {
        slideDown: "slideDown 300ms ease-out",
        slideUp: "slideUp 300ms ease-out",
      },

      keyframes: {
        slideDown: {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
