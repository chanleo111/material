import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {extend: {
      colors: {
        "blue-gray": {
          500: "#64748b", // 確保包含 blue-gray 顏色
        },
      },
    },
  },
  plugins: [require("@material-tailwind/react/utils/withMT")],
});

export default config;
