/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#67348D",
        primaryLight: "#AD55EF",
        secondary: "#EA239A",
        information: "#1B85E8",
        success: "#1DBF99",
        success2: "#00C0C0",
        success3: "#C2F0F0",
        warning: "#FF8E3C",
        warning2: "#FFFF00",
        warning3: "#FFFFC2",
        error: "#F4216D",
        error2: "#FF0000",
        error3: "#FFC2C2",
        information12: "#E4F0FC",
        success12: "#E4F7F3",
        warning12: "#FFF1E8",
        error12: "#FEE4ED",
        primaryLight12: "#F7E6F9",
        primaryText: "#FF27FF",
        bodyText: "#32383D",
        bodyText2: "#464B53",
        bodyCaption: "#637488",
        placeholder: "#ABB5C4",
        white: "#FFFFFF",
        grey: "#8A949D",
        grey2: "#A4ABB2",
        grey3: "#B6BCC1",
        grey4: "#CED2D5",
        grey5: "#E0E2E4",
        grey6: "#F4F5F6",
        grey7: "#F9F9F9",
        background: "#F3F6FB",
        stroke: "#D4DDE6",
        stroke2: "#EEF1F7",
        iconAll: "#8FA5B7",
        disabled: "#E3E8F1",
        shadowCard: "#1F637488",
        btnGradient: "linear-gradient(90deg,_#592D83_0%,_#A270E2_100%)",
        limeAboutUs: "#bacc58",
        amberAboutUs: "#e7b351",
        grayAboutUs: "#bfbfce",
        greenAboutUs: "#92c7b9",
        buttonText4: "#592D83",
        buttonBg4: "#F5EBFD",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#AD55EF",

          secondary: "#EBE6F0",

          accent: "#592D83",

          neutral: "#18182f",

          "base-100": "#ffffff",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
