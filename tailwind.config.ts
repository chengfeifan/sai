import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fffaf8",
        card: "#ffffff",
        primary: "#d9777f",
        secondary: "#f8dedd",
      },
    },
  },
  plugins: [],
} satisfies Config;
