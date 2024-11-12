import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:"var(--font-roboto)",
      },
      colors: {
        primary: {
          DEFAULT:"#F97316"
        },
        secondary:{
          DEFAULT:"#FAEDE6",
          light:"#faf4f0"
        }
        
      },
    },
  },
  plugins: [],
};
export default config;
