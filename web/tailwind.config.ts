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
        elmessiri: ["var(--font-el-messiri)"],
      },
      colors: {
        primary: {
          50: "#f0f9ff",
          500: "#3b82f6",
          900: "#1e3a8a",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        // Style 1 white text
        ".text-style1-white": {
          color: "#FFF",
          textAlign: "center",
          fontFamily: "baloo",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "24px",
        },
        // Main heading style
        ".text-heading-main": {
          color: "#FFF",
          textAlign: "center",
          fontFamily: "elmessiri",
          fontSize: "64px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "1.2",
        },
        // Tagline style
        ".text-tagline": {
          color: "#FFF",
          textAlign: "center",
          fontFamily: "baloo",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "1.3",
        },
        // Mobile responsive versions
        "@media (max-width: 767px)": {
          ".text-style1-white": {
            fontSize: "20px",
            fontWeight: "500",
          },
          ".text-heading-main": {
            fontSize: "40px",
            fontWeight: "700",
          },
          ".text-tagline": {
            fontSize: "24px",
            fontWeight: "600",
          },
        },
        // Additional utility classes
        ".text-body": {
          fontFamily: "var(--font-signika)",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "1.5",
        },
        ".text-small": {
          fontFamily: "var(--font-signika)",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "1.4",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;
