/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // colors: {
      //   teal: {
      //     400: '#64ffda', // Accent green (hover & icons)
      //     500: '#64ffda', // Accent green (primary)
      //   },
      //   slate: {
      //     900: '#0a192f', // Background (very dark blue)
      //     800: '#112240', // Section background
      //     700: '#233554', // Cards, nav, sidebar
      //     600: '#8892b0', // Paragraph text
      //     500: '#a8b2d1', // Muted text
      //     400: '#ccd6f6', // Headings
      //     300: '#e6f1ff', // Subtle UI/contrast text
      //     200: '#f0f5fa', // Border hover/alt background
      //     100: '#f8fafc', // Lightest (not used in dark mode)
      //   },
      // },
      colors: {
        teal: {
          400: '#38bdf8', // Soft cyan accent (lighter)
          500: '#0ea5e9', // Main accent (bright sky blue)
        },
        slate: {
          900: '#0f172a', // Deep navy (main background)
          800: '#1e293b', // Dark section background
          700: '#334155', // Card, hover background
          600: '#475569', // Paragraph text
          500: '#64748b', // Muted UI text
          400: '#94a3b8', // Subheadings
          300: '#cbd5e1', // Inputs, UI lines
          200: '#e2e8f0', // Light borders
          100: '#f8fafc', // Off-white
        },
      },

      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],

      },
      animation: {
        fade: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
