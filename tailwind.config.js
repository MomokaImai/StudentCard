/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontSize: {
      xs: ['5px', '10px'],
      sm: ['8px', '16px'],
      base: ['12px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    }
  },
  plugins: [],
}

