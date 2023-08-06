import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'thew': ["HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", "Arial", "Lucida Grande", "sans-serif"],
      'thewTest': ['sans-serif']
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
