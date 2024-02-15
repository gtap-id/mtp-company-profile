/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/background-hero.jpg')",
        thumbnail: "url('/src/assets/photo1.png')",
      },
      colors: {
        primary: "#26234E",
        secondary: "#ED1165",
        "light-gray": "#E4E3ED",
      },
    },
  },
  plugins: [],
};
