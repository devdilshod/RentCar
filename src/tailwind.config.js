/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#3563E9",      
          secondary: "#54A6FF",    
          darkText: "#1A202C",     
          lightText: "#596780",    
          borderLight: "#C3D4E9", 
        }
      },
    },
    plugins: [require('daisyui')],
  }