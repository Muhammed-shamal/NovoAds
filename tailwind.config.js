import {nextui} from '@nextui-org/react'

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        aurora: "aurora 60s linear infinite",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
        'architects-daughter': ['var(--font-architects-daughter)', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],

        //imported font from pc
        edo:['edo','sans-serif'],
        cukil:['cukil','sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        consola:['consola','sans-serif'],
        
      },
      colors: {
        primary:{
          DEFAULT:" #1c1d55",
         
        },
        secondary:{
          

  50: '#efe9ff',
  100: '#cbbff7',
  200: '#a895eb',
  300: '#856be1',
  400: '#6241d8',
  500: '#4927be',
  600: '#391f95',
  700: '#27156c',
  800: '#170c42',
  900: '#09021c',

          DEFAULT:"#4626b7ff",
          
        },
        tertiary: {
          50: '#fee6ff',
          100: '#f1baf9',
          200: '#e48ef1',
          300: '#d962ea',
          400: '#cc36e3',
          500: '#b31cc9',
          600: '#8b149d',
          700: '#640d71',
          800: '#3e0545',
          900: '#18001b',
          DEFAULT:'#cd39e3ff'
        },
        
        quaternary: {
          

  50: '#f9fae2',
  100: '#eeeec0',
  200: '#e3e39b',
  300: '#d7d774',
  400: '#cccc4f',
  500: '#b3b335',
  600: '#8b8b28',
  700: '#63631a',
  800: '#3b3c0d',
  900: '#151500',

        DEFAULT: '#dbdb81'},
        background: {
          DEFAULT: "#ffffff",
          dark: "#0D001A",
        },
        text: {
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
        terminal:  '#1a202c',
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  darkMode: 'class', // Use class-based dark mode
  plugins: [addVariablesForColors,nextui()],
};


// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}


// container: {
//   center: true,
//   padding: {
//     DEFAULT: "20px",
//     lg: "80px",
//   },
//   screens: {
//     sm: "375px",
//     md: "768px",
//     lg: "1200px",
//   },
// },
// screens: {
//   sm: "375px",
//   md: "768px",
//   lg: "1200px",
// },

// extend: {
//   colors: {
//     primary: {DEFAULT : '#3D52A0'},
//     secondary: {DEFAULT:'#7091E6'},
//     tertiary: {DEFAULT:'#8697C4'},
//     quaternary: {DEFAULT: '#ADBBDA'},
//     quinary: {DEFAULT:'#EDE8F5'},
//   },

//   backgroundImage: {
//     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//     "gradient-conic":
//       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//   },
// },