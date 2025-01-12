import { extendTheme } from "@chakra-ui/react";

const defaultTheme = extendTheme({
  colors: {
    blue: "#0069CA",
    purple: "#8C19D2",
    gray: "#4A5568",
    grayLight: "#A0AEC0",
    greenButton: "#2c7a7b",
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  fontSizes: {
    sm: "0.75rem", // 12px
    md: "1rem", // 16px
    lg: "1.25rem", // 20px
    xl: "1.5rem", // 24px
    "2xl": "1.875rem", // 30px
    "3xl": "2.25rem", // 36px
    "4xl": "3rem", // 48px
    "5xl": "4rem", // 64px
    "6xl": "4.5rem", // 72px
    "7xl": "5rem", // 72px
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  styles: {
    global: {
      body: {
        color: "#4A5568",
        bg: "white",
      },
    },
  },
});
export default defaultTheme;
