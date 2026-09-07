import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B2239",
        gold: "#B48A4A",
        ivory: "#F7F3EC",
        softivory: "#F7F3EC",
        divider: "#E3DBCF",
        grayblue: "#6E6A63",
        muted: "#6E6A63",
        ink: "#0B2239"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Newsreader", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 16px 48px rgba(11, 34, 57, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;
