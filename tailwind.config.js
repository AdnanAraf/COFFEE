/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Dancing Script"],
        poppins: ["Poppins"],
        crimpson: ["Crimson Text"],
        rancho: ["Rancho"],
      },
    },
  },
  plugins: [require("daisyui")],
};
