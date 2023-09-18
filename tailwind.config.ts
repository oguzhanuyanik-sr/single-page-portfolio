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
