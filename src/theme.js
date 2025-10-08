import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#f50057" },
    background: { default: "#f5f5f5" },
    text: { primary: "#333", secondary: "#555" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h2: { fontWeight: 700, lineHeight: 1.2 },
    h4: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "all 0.3s ease",
          "&:hover": { transform: "translateY(-5px)", boxShadow: "0 8px 20px rgba(0,0,0,0.15)" },
        },
      },
    },
  },
});

export default theme;
