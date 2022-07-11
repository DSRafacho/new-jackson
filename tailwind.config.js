module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xsm': '320px',
      "sm":	"640px",
      "md":	"768px",
      "lg":	"1024px",
      "xl":	"1280px",
      "big":	"1440px",
      "2xl":	"1536px",
    },
    extend: {
      backgroundImage: {
        'barber': "url('imagens/barbershop.jpg')",
        'groomday': "url('imagens/groom-day.jpg')",
      },
      colors: {
        "j-black": "#0D1921",
        "j-black2": "#132530",
        "j-black3": "#1a2c36",
        "j-black4": "#04090c",
        "j-black5": "#030e14",

        "j-black6": "#122734",
        "j-black7": "#24343c",

        "j-black8": "#1f2f38",
        // "j-black2": "#14232c",
        "j-blue": "#344996",
        "j-yellow": "#CCA43B",
        "j-white": "#FAFAFA",
        "j-gray": "#8AA2A9",
        // "j-blue": "#",
      }
    },
  },
  plugins: [],

}
