/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        wave: 'waveEffect 1.5s infinite ease-out',
      },
      keyframes: {
        waveEffect: {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
      },
      padding: {
        128: "32rem",
        144: "36rem",
        "25px": "25px",
      },

      borderRadius: {
        "38px": "38px",
      },
      colors: {
        darkGray: "#343434",
        // ourOrange: "#ffbb38",
        ourOrange: "#1fb7f6",
        bodyColor: "#181818",
        courseBGcolor: "#242424",
      },
       
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Add this plugin
  ],
};
