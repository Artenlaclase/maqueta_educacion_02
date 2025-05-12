/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta de colores formales
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ef',
          200: '#b9c6d2',
          300: '#8b9bab',
          400: '#5d6f7f',
          500: '#425b71', // Color principal
          600: '#344861',
          700: '#2a3a4b',
          800: '#1e2a36',
          900: '#131c25'
        },
        accent: {
          50: '#e6f2ff',
          100: '#beddff',
          200: '#8ec6ff',
          300: '#5eadff',
          400: '#2e94ff',
          500: '#0080ff', // Color de acento
          600: '#0070e0',
          700: '#0060c0',
          800: '#0050a0',
          900: '#003060'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif']
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }
    }
  },
  plugins: []
};