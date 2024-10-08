/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "src/main.ts", "src/dom.ts"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
