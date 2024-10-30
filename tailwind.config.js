/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/landingBg.jpg')",
        banner: "url('/aboutBg.jpg')",
      },
      fontFamily: {
        heebo: [`Heebo`, `sans-serif`],
        montserrat: [`Montserrat`],
      },
    },
  },
  plugins: [],
};
