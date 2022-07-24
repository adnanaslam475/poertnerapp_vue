/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue", "src/**/*.vue"],
  corePlugins: {
    preflight: false,
  },
  prefix: "tw-",
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
};
