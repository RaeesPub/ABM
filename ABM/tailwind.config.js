/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backdropBlur: {
      //   DEFAULT: '80px',
      //   md: '100px',
      //   lg: '300px',
      // },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    backdropFilter: true,
  }
};
