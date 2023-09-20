import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
      colors: {
        black: '#151515',
        darkGrey: '#242424',
        grey: '#d9d9d9',
        white: '#ffffff',
        green: '#4ee1a0',
        red: '#FF6F5B',
      },
      fontSize: {
        'heading-xl': [
          '88px',
          { lineHeight: '88px', fontWeight: 'bold', letterSpacing: '-2.5px' },
        ],
        'heading-l': [
          '48px',
          { lineHeight: '56px', fontWeight: 'bold', letterSpacing: '-1.5px' },
        ],
        'heading-m': [
          '24px',
          { lineHeight: '32px', fontWeight: 'bold', letterSpacing: '0' },
        ],
        'body-l': [
          '18px',
          { lineHeight: '28px', fontWeight: 'medium', letterSpacing: '0' },
        ],
      },
      fontFamily: {},
      boxShadow: {},
      backgroundImage: {},
      container: {
        center: true,
        padding: '1rem',
        screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
      },
    },
  },
  plugins: [],
};
export default config;
