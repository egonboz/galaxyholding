import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { spacialTheme } from "./spacialTheme";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={spacialTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
