//這頁引入tailwind 有很多設定好的變數

import plugin from 'tailwindcss/plugin'
import tailwindScrollbar from 'tailwind-scrollbar'

const tailwindConfig = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}',
    './assets/scss/**/*.scss'
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em'
    },
    screens: {
      sm: '568px',
      md: '768px',
      lg: '992px',
      xl: '1320px'
    },
    spacing: {
      px: '1px',
      0: '0px',
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '30px',
      7: '35px',
      8: '40px',
      9: '45px',
      10: '50px',
      11: '55px',
      12: '60px',
      13: '65px',
      14: '70px',
      15: '75px',
      16: '80px',
      17: '85px',
      18: '90px',
      19: '95px',
      20: '100px'
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '1320px'
      }
    },
    extend: {
      colors: {
        primary: {
          50: '#FFF5E7',
          100: '#FFE8C8',
          200: '#FFDBA8',
          300: '#FFC268',
          400: '#F9A935',
          500: '#F29001',
          600: '#D57F01',
          700: '#DB6900',
          800: '#B45600',
          900: '#793A00'
        },
        secondary: {
          50: '#EEFAF9',
          100: '#D0EFED',
          200: '#B2E3E1',
          300: '#94D8D5',
          400: '#75CCC9',
          500: '#59B5B2',
          600: '#309d9a',
          700: '#3D8A88',
          800: '#2E7371',
          900: '#1E5C5A'
        },
        danger: {
          50: '#FFF1EA',
          100: '#FFE8E0',
          200: '#FFD0B1',
          300: '#FFB882',
          400: '#F56D48',
          500: '#EA3A27',
          600: '#DE0606',
          700: '#C13515',
          800: '#991E0C',
          900: '#700602'
        },
        link: '#004ee5',
        'social-fb': {
          50: '#EDF1F8',
          500: '#3b5998'
        },
        'social-line': {
          50: '#E0FFE0',
          500: '#00b900'
        },
        'social-twit': {
          50: '#E9F6FE',
          500: '#1da1f2'
        },
        base: {
          50: '#F7F7F7',
          100: '#F1F1F1',
          200: '#DDDDDD',
          300: '#C2C2C2',
          400: '#999999',
          500: '#727272',
          600: '#555555',
          700: '#424242',
          800: '#2F2F2F',
          900: '#101010'
        }
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms'
      },
      minWidth: ({ theme }) => ({
        ...theme('spacing')
      }),
      minHeight: ({ theme }) => ({
        ...theme('spacing')
      }),
      maxWidth: ({ theme }) => ({
        ...theme('spacing')
      }),
      maxHeight: ({ theme }) => ({
        ...theme('spacing')
      })
    }
  },
  plugins: [
    tailwindScrollbar,
    plugin(function ({ addComponents, matchUtilities, theme }) {
      addComponents({
        '.container-sm': {
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '15px',
          paddingRight: '15px',
          '@screen sm': {
            maxWidth: '1170px'
          }
        }
      })
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`
          })
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme('bgGradientDeg', {}), // name of config key. Must be unique
            {
              10: '10deg', // bg-gradient-10
              15: '15deg',
              20: '20deg',
              25: '25deg',
              30: '30deg',
              45: '45deg',
              60: '60deg',
              90: '90deg',
              100: '100deg',
              120: '120deg',
              135: '135deg'
            }
          )
        }
      )
    })
  ]
}

export default tailwindConfig
