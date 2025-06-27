/* eslint-disable @typescript-eslint/no-explicit-any */
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ["var(--font-baloo-2)"],
        elmessiri: ["var(--font-elmessiri)"],
      },
      colors: {
        primary: {
          50: "#f0f9ff",
          500: "#3b82f6",
          900: "#1e3a8a",
        },
        orange: {
          500: "#EE693A",
        },
      },
    },
  },
  plugins: [],
};

export default config;
