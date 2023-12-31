import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        custom: "60% 40% 30% 70%/60% 30% 70% 40%",
      },
      padding: {
        custom: "10%",
      },
      aspectRatio: {
        "3/2": "3/2",
      },
      keyframes: {
        custom: {
          "0%,100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 60% 40%/30% 50% 40% 60%" },
        },
      },
      animation: {
        custom: "custom 7s ease-in-out infinite",
      },
      boxShadow: {
        custom: "0 0 10px rgba(0,0,0,.09)",
      },
      transitionDuration: {
        "5000": "5000ms",
      },
    },
  },
  plugins: [],
};
export default config;
