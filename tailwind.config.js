module.exports = {
  purge: [
    ".src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      maxHeight: ["hover"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
