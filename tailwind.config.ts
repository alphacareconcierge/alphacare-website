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
        navy: "#0C1D33",
        gold: "#BA8338",
        ivory: "#FAF7F2",
        softivory: "#FBF8F3",
        divider: "#E3DBCF",
        grayblue: "#2C353F",
        ink: "#0C1D33"
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 16px 48px rgba(12, 29, 51, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;
