module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-blue": {
          500: "#212526",
        },
      },    
      fontFamily: {
        Noto: ["Noto Sans TC", "sans-serif"],
        Source: ["Source Sans Pro", "sans-serif"],
       },
    },
    screens: {
      '2xs': '380px',
      'xs': '420px', 
      'xsm':'550px',
      'sm': '640px',
      'md': '760px',
      'mdlg' : '960px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px' 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};