import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFB6C1", // Light Pink
    },
    secondary: {
      main: "#B0E0E6", // Powder Blue
    },
    background: {
      default: "#FFF8DC", // Cornsilk
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default theme;
