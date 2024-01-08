/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        arizonia: ["Arizonia", ...defaultTheme.fontFamily.sans],
        lora: ["Lora Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        pink: {
          custom: "#d5a6bd",
          light: "#FFEBEE",
          lighter: "#FFEFF3",
        },
        gold: {
          100: "#ffedca",
          500: "#D2A55D",
        },
        slate: {
          200: "#fdfdfd",
        },
      },
    },
  },
  plugins: [],
};
