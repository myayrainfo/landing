import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, GlobalStyles, ThemeProvider, createTheme } from "@mui/material";
import App from "./App.jsx";
import "./index.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#00346f" },
    secondary: { main: "#515f74" },
    background: { default: "#faf8ff", paper: "#ffffff" },
    text: { primary: "#131b2e", secondary: "#424751" },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, letterSpacing: "-0.05em" },
    h2: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, letterSpacing: "-0.05em" },
    h3: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, letterSpacing: "-0.04em" },
    h4: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700 },
    h6: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 700, fontFamily: '"Plus Jakarta Sans", sans-serif' },
  },
  shape: { borderRadius: 18 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: "1.4rem",
          paddingBlock: "0.85rem",
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "outlined", fullWidth: true },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": { colorScheme: "light" },
          body: { backgroundColor: "#faf8ff" },
        }}
      />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
