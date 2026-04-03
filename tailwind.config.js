/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ayra: {
          midnight: "#0F172A",
          primary: "#004A99",
          secondary: "#475569",
          tertiary: "#0D9488",
          white: "#F8FAFF",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 70px rgba(0, 74, 153, 0.25)",
      },
    },
  },
  plugins: [],
};
