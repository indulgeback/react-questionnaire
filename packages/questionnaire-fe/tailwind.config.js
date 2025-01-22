/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-primary-100': 'rgb(38, 166, 154)',
        'custom-primary-200': 'rgb(64, 141, 134)',
        'custom-primary-300': 'rgb(205, 250, 246)',
        'custom-accent-100': 'rgb(128, 203, 196)',
        'custom-accent-200': 'rgb(67, 164, 155)',
        'custom-text-100': 'rgb(38, 51, 57)',
        'custom-text-200': 'rgb(114, 143, 158)',
        'custom-bg-100': 'rgb(240, 241, 245)',
        'custom-bg-200': 'rgb(208, 235, 234)',
        'custom-bg-300': 'rgb(255, 255, 255)',
        'custom-blue': 'rgb(24, 144, 255)',
        'custom-yellow': 'rgb(250, 219, 20)',
        'custom-red': 'rgb(255, 77, 79)'
      }
    }
  },
  plugins: []
}
