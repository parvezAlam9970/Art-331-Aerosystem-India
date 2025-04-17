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
        mgrey: "#E3E3E3",
        sgrey:"#F0F0F0",
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
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
