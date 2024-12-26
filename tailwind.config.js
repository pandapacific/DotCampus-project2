/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'Md': '901px',
      'lg': '1024px',
      'xl': '1280px',
      '1.5xl':'1400px',
      '2xl': '1440px',
      '3xl': '1536px',
      '4xl': '2560px',
    },

    extend: {

      color:{
        producthover: 'hsla(0, 0%, 0%, 0.5)',
      },

    },

  },

  plugins: [],
}

