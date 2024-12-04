// theme.ts
import { createTheme, ThemeOptions } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Example primary color
    },
    secondary: {
      main: "#f50057", // Example secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Or your preferred font family
  },
} as ThemeOptions); //Explicitly type as ThemeOptions

export default theme;
