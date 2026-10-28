/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep luxurious Burgundy canvas base
        sand: {
          DEFAULT: '#19060B', // Rich deep burgundy canvas base
          light: '#250A11',   // Elevated burgundy card surface
          warm: '#2A0C14',    // Warm burgundy surface
          dark: '#120407',    // Deepest shadow burgundy black
        },
        // Alternating Burgundy wine bands (About, Skills, Kind Words)
        mist: {
          DEFAULT: '#22080F', // Velvety deep wine burgundy section band
          light: '#300D16',   // Elevated wine card
          soft: '#270A12',    // Soft wine surface
          dark: '#3E101D',    // Accent burgundy container
        },
        // Secondary text & subtle metadata (Blush rose / soft mauve)
        slate: {
          blue: '#E2B8C4',
          'blue-muted': '#BA8796',
        },
        // Primary text & crisp headings (High-contrast glowing rose-white)
        tide: {
          DEFAULT: '#FFF1F2',
          deep: '#FFFFFF',
          muted: '#FCE7F3',
        },
        // Radiant accents (Ruby / rose crimson)
        seagreen: {
          DEFAULT: '#E11D48',
          hover: '#F43F5E',
          soft: '#FB7185',
          tint: '#4C0E1D',
        },
        // Dedicated Burgundy palette
        burgundy: {
          50: '#FDF2F4',
          100: '#FCE7EB',
          200: '#F8CFD8',
          300: '#F2A8B9',
          400: '#E87593',
          500: '#D9436E',
          600: '#C02652',
          700: '#9F1A40',
          800: '#841837',
          900: '#4A0C1E',
          950: '#19060B',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
