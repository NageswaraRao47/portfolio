/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030712',
          900: '#060a12',
          850: '#0a0f1d',
          800: '#111827',
          700: '#1e293b',
          600: '#334155',
        },
        brand: {
          purple: {
            DEFAULT: '#a855f7',
            glow: '#c084fc',
            dark: '#7e22ce'
          },
          blue: {
            DEFAULT: '#3b82f6',
            glow: '#60a5fa',
            dark: '#1d4ed8'
          },
          cyan: {
            DEFAULT: '#06b6d4',
            glow: '#22d3ee',
            dark: '#0e7490'
          }
        }
      },
      fontFamily: {
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        }
      },
      boxShadow: {
        'glow-purple': '0 0 35px -5px rgba(168, 85, 247, 0.35)',
        'glow-blue': '0 0 35px -5px rgba(59, 130, 246, 0.35)',
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}

