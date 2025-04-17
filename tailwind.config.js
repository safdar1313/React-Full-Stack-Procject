/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center:true,
      padding: "1rem",
     
    },

    extend: {
    //  screens: {
    //   'sm': {'min': '350px', 'max': '767px'},
    //  }
    },
  },
  plugins: [],
};
