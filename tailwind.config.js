/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5a1236",
        secondary: "#00FF00",
        tertiary: "#F6F7F6",
        green: "#01876B",
      },
      spacing: {
        "max-content": "1140px",
      },
      backgroundImage: {
        "hero-pattern": "url('/home.jpg')",
      },
      fontSize: {
        "fluid-lg": "clamp(1.75rem, 2vw + 1rem, 3rem)", // 28px a 48px
        "fluid-md": "clamp(1rem, 1.5vw + 1rem, 1.5rem)", // 18px a 24px
      },
    },
  },
  plugins: [],
};
