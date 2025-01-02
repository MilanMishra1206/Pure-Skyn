/**
 * @function Theme
 * @params {jsx} children
 * @returns theme of an applicaion.
 */

import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

function Theme({ children }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#185EC4",
        contrastText: "white",
      },
    },
    typography: {
      button: {
        fontFamily: "Poppins",
        letterSpacing: "0.025em",
        textTransform: "none",
        fontSize: "1rem",
        fontWeight: "600",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
