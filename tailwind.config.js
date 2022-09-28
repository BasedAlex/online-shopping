/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      '3xs': '.55rem',
      xxs: '.65rem',
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      width: {
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
      },
      gridColumn: {
        'span-1/3': '1 / span 3',
        'span-4/3': '4 / span 3',
      },
      gridRowStart: {
        '2/3': '2 / span 3',
      },
      gridTemplateColumns: {
        // For cart box
        cart: '3fr 1fr 1fr 1fr',
      },
    },
    screens: {
      xxs: '320px',
      xs: '640px',
      sm: '768px',
      // => @media (min-width: 768px) { ... }

      md: '960px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
