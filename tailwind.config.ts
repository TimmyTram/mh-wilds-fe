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
        bookBorder: "var(--color-book)",
        card: "var(--color-card)",
        cardHover: "var(--color-card-hover)",
        sidebar: "var(--color-sidebar)",
        sidebarHover: "var(--color-sidebar-hover)",
        button: "var(--color-button)",
        buttonHover: "var(--color-button-hover)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;