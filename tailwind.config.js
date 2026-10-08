/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Maximalist Color Palette
        'midnight-navy': '#0A1931',
        'rose-gold': '#B76E79',
        'amber': '#FFBF00',
        'charcoal': '#2E4052',
        'ivory': '#FFFFF0',
      },
      fontFamily: {
        // Romantic Serif for headings
        'heading': ['serif'],
        // Modern Sans-serif for body text
        'body': ['sans-serif'],
      },
      blur: {
        // For Liquid Glass effect
        'lg': '20px',
      },
      borderWidth: {
        // For vibrant borders
        '3': '3px',
      },
    },
  },
  plugins: [],
}
