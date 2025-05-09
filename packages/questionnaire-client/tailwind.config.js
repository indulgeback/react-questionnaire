import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/chip.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"]
      },
      animation: {
        blob: "blob 7s infinite",
        "light-beam": "light-beam 4s ease-in-out infinite",
        "pulse-float": "pulse-float 6s ease-in-out infinite",
        sparkle: "sparkle 2s linear infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        },
        "light-beam": {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)"
          },
          "50%": {
            opacity: "0.7"
          },
          "100%": {
            opacity: "0",
            transform: "translateX(100%)"
          }
        },
        "pulse-float": {
          "0%, 100%": {
            transform: "translateY(0) scale(1)",
            opacity: "0.6"
          },
          "50%": {
            transform: "translateY(-20px) scale(1.05)",
            opacity: "1"
          }
        },
        sparkle: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)"
          },
          "50%": {
            opacity: "0.6",
            transform: "scale(0.8)"
          }
        }
      }
    }
  },
  darkMode: "class",
  plugins: [heroui()]
};

export default config;
