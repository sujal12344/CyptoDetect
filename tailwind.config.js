/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{nunito:"Nunito"}
    },
    colors:{
      gray: { 100: "#808080", 200: "#323232", 300: "#212121" },
      white: "#fff",
      blark: "#00203fff",
      grecyan: "#adefd1ff",
      red: "#d6436e",
      green: "#25da72",   
    },
    fontSize:{
      sm: "14px", md: "18px", lg: "24px", xl: "32px", base: "16px"
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
