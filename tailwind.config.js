/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    transitionTimingFunction: {
      "custom-ease": "cubic-bezier(0.76,0,0.24,1)",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        polySans: ["var(--font-polysans-median)"],
        everett: ["var(--font-everett)"],
        inter: ["var(--font-inter)"],
      },
      screens: {
        "3xl": "2000px",
        landing: "968px",
        footer: "860px",
      },
    },
  },
  plugins: [],
};
