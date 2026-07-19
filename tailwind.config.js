/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        uboor: {
          blue: '#1864ab',
          orange: '#f58220',
          cyan: '#0ea5e9',
          'blue-light': 'rgba(24, 100, 171, 0.05)',
          'orange-light': 'rgba(245, 130, 32, 0.05)',
          'cyan-light': 'rgba(14, 165, 233, 0.05)',
        },
        text: {
          main: '#334155',
          muted: '#64748b',
        },
        bg: {
          'pure-white': '#ffffff',
          'off-white': '#f8fafc',
        }
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #1864ab, #3b82f6)',
        'gradient-orange': 'linear-gradient(135deg, #f58220, #fb923c)',
        'gradient-cyan': 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
        'gradient-mixed': 'linear-gradient(135deg, #1864ab, #f58220)',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}