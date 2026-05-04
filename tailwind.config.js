/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        antracyt: '#1B1B1F',
        'light-gray': '#F4F4F5',
        primary: '#0F7BFF',
        secondary: '#FFD257',
      },
      borderRadius: {
        sm: '8px',
      },
      fontSize: {
        h1: ['48px', { lineHeight: '60px', fontWeight: '700' }],
        h2: ['36px', { lineHeight: '44px', fontWeight: '700' }],
        h3: ['28px', { lineHeight: '36px', fontWeight: '700' }],
        body: ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        cta: ['14px', { lineHeight: '20px', fontWeight: '600' }],
      },
      fontFamily: {
        inter: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}
