/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-primary-100': '#26A69A',
        'custom-primary-200': '#408d86',
        'custom-primary-300': '#cdfaf6',
        'custom-accent-100': '#80CBC4',
        'custom-accent-200': '#43A49B',
        'custom-text-100': '#263339',
        'custom-text-200': '#728f9e',
        'custom-bg-100': '#E0F2F1',
        'custom-bg-200': '#D0EBEA',
        'custom-bg-300': '#FFFFFF',
        'custom-blue': '#1890ff',
        'custom-yellow': '#fadb14',
        'custom-red': '#ff4d4f'
      }
    }
  },
  plugins: []
}
