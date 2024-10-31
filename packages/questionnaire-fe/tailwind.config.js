/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-green': '#009E8E',
        'custom-blue': '#1890ff',
        'custom-yellow': '#fadb14',
        'custom-red': '#ff4d4f'
      }
    }
  },
  plugins: []
}
