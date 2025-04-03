import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable dark mode with class
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#75b7ea"
        },
        complementary: "#3dc08d",
        background: "var(--background)", // Custom background variable
        foreground: "var(--foreground)", // Custom foreground variable
      },
    },
  },
  plugins: [],
};

export default config;