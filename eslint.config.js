module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(102,201,255)",
        customBlueDark: "rgb(54,78,216)",
        customGray: "#f1f1f1",
      },
      boxShadow: {
        "footer-hover": "0 6px 12px rgba(255, 255, 255, 0.4)",
        "footer-active": "0 4px 8px rgba(255, 255, 255, 0.2)",
        "custom-lg": "0 5px 10px rgba(102,201,255, 0.5)",
        "custom-md": "0 2px 5px rgba(102,201,255, 0.3)",
      },
      animation: {
        fadeInNavBar: "fadeInNavBar 1s backwards 1s",
        fadeIn: "fadeIn 1s forwards",
        bounce: "bounce 0.6s infinite alternate",
      },
      keyframes: {
        fadeInNavBar: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        bounce: {
          to: {
            opacity: 0.3,
            transform: "translate3d(0, -8px, 0)",
          },
        },
      },
    },
  },
  plugins: [],
}
