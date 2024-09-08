/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "sansation-regular": ["Sansation", "sans-serif"], // Specific key for Sansation Regular
      "glora-bold": ["GloraSansBold", "sans-serif"], // Keeping previous setting for GloraSansBold
    },
    screens: {
      sm: "375px",
      smx: "320px",
      md: "668px",
      lg: "9024px",
      xl: "1180px",
      "2xl": "1820px",
      "3xl": "2300px",
      mac: "2920px",
      ultrawide: "3500px",
    },
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(56.31% 35.93% at 50% 50%, #4E6E58 0%, #000000 98.72%)",
      },
    },
  },
  plugins: [],
};
