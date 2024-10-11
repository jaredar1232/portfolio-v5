module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#66C9FF",
        customBlueMid: "#798bf9",
        customBlueDark: "#0351A5",
        customGray: "#f1f1f1",
        lightSeaGreen: "#20B2AA",
      },
      boxShadow: {
        custom: "0 1.5rem 4rem rgba(0, 0, 0, 0.25)",
        "custom-hover": "0 1rem 2rem rgba(0, 0, 0, 0.15)",
        "custom-active": "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
        headshot: "-8px 8px 22px rgba(169, 169, 169, 0.5)", // Custom shadow for the headshot
        "navbar-home": "0px 5px 10px rgba(3, 3, 3, 0.568)",
        "navbar-not-home": "0px 5px 10px rgba(201, 206, 211, 0.568)",
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out forwards",
        bounceFade: "bounceFade 0.6s infinite alternate",
        fadeUpToDown: "fadeUpToDown 0.5s ease-out backwards",
        fadeDownToUp: "fadeDownToUp 0.5s ease-out backwards",
        liftOff: "liftOff 2s ease-out 0.2s backwards",
        slideIn: "slideIn 0.5s ease-out backwards",
        fadeInModal: "fadeInModal 0.3s ease-in-out forwards",
        modalEffect: "modalEffect 0.6s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounceFade: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0.3", transform: "translateY(-8px)" },
        },
        fadeUpToDown: {
          "0%": { opacity: "0", transform: "translateY(-5rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDownToUp: {
          "0%": { opacity: "0", transform: "translateY(5rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        liftOff: {
          "0%": {
            boxShadow: "0 0 0 rgba(0, 0, 0, 0.5)",
            border: "1px lightgray solid",
          },
          "50%": {
            boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.3)",
          },
          "100%": {
            boxShadow: "0 1.5rem 4rem rgba(0, 0, 0, 0.25)",
            border: "1px white solid",
          },
        },
        slideIn: {
          "0%": { transform: "translateX(5rem)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeInModal: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        modalEffect: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".bg-clip-unset": {
            "-webkit-background-clip": "unset",
            "background-clip": "unset",
          },
          ".text-fill-white": {
            "-webkit-text-fill-color": "white",
          },
        },
        ["responsive", "hover"]
      )
    },
  ],
}
