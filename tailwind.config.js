/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Primary Blue
          light: '#DBEAFE',   // Light Blue
        },
        success: '#22C55E', // Success Green
        warning: '#F59E0B', // Warning Yellow
        danger: '#EF4444',  // Danger Red
        gray: {
          50: '#F9FAFB', // Gray Background
          900: '#111827', // Text Dark
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
