module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {

    },
    fontFamily:{
      sans:['Roboto','sans-serif'],
      poppin:['Poppins','sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base', // only generate global styles
      strategy: 'class',
    }),
  ],
}
