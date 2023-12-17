/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        button: "var(--color-bg-button)"
      },
      textColor: {
        accent: "var(--colot-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-primary)",
        btnText: "(var--color-bg-secondary)",
      },
      borderColor: {
        accent: "var(--colot-text-accent)",
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-primary)",
        input: "(var--color-bg-input)",
      }
    },
  },
  plugins: [],
}

