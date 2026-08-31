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
        navy: "#062A52",
        gold: "#B8751A",
        ivory: "#F7F2EA",
        softivory: "#FBF8F3",
        divider: "#DED2C1",
        grayblue: "#304661",
        ink: "#062A52"
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 16px 48px rgba(6, 42, 82, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;
