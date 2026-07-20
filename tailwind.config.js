/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        background: {
          light: '#F5F3F0',
          dark: '#1A1A1A'
        },
        surface: {
          light: '#FFFFFF',
          dark: '#242424'
        },
        accent: '#6B8E75'
      }
    },
  },
  plugins: [],
}
