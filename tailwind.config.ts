// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',  // Enable dark mode with class
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',  // Custom background variable
        foreground: 'var(--foreground)',  // Custom foreground variable
      },
    },
  },
  plugins: [],
};
