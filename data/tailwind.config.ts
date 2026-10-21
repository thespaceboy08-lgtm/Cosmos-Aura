import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#030308",
          900: "#070714",
          850: "#0c0d20",
          800: "#13142e",
        },
        cosmic: {
          cyan: "#38bdf8",
          violet: "#a855f7",
          amber: "#f59e0b",
          emerald: "#10b981",
        },
      },
    },
  },
  plugins: [],
};

export default config;
