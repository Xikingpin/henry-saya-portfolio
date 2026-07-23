/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables manual/system dark mode
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-dark': '#0F0F0F',
        'portfolio-gray': '#1A1A1A',
        'portfolio-gray-light': '#242424',
        'portfolio-light': '#FFFFFF',
        'accent-blue': '#3B82F6',
        'accent-blue-dim': '#2563EB',
        'signal': '#2DD4A7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.6)' },
        },
      },
    },
  },
  plugins: [],
}
