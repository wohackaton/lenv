/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: { 900: '#102A43', 800: '#17324D' },
        teal: { 500: '#18A999', 400: '#35C8B5' },
        mint: { 50: '#E8F8F4' },
        cyan: { 100: '#C8E8EF' },
        surface: { 0: '#FFFFFF', 50: '#F8FBFA' },
        lilac: '#E9DFFF',
        success: '#35B87A',
        warning: '#F4C95D',
        error: '#D9534F',
        info: '#4FB3BF'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px'
      }
    }
  },
  plugins: []
}
