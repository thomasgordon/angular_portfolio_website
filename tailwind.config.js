/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      "background-colour": "#EDEAE2",
      "text-colour": "#383732",
      "accent-colour": "#EE92C2",
      // Dark mode colours
      "background-colour-dark": "#383732",
      "text-colour-dark": "#EDEAE2",
      "accent-colour-dark": "#EE92C2",
    },
    screens: {
      xs: "320px", // Extra small devices (phones)
      sm: "375px", // Small devices (larger phones)
      md: "768px", // Medium devices (tablets)
      lg: "1025px", // Large devices (laptops)
      xl: "1441px", // Extra large devices (desktops)
      "2xl": "1921px", // Large desktops or monitors
    },
    fontSize: {
      sm: "0.8rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
      "10xl": "16rem",
    },
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};