// src/theme.js

import { createTheme } from '@mui/material/styles';

// Define a custom theme to enforce a clean, modern look
const theme = createTheme({
  palette: {
    // You can adjust these colors to match your exact vision
    primary: {
      main: '#212121', // Dark text/primary color for a sophisticated look
    },
    secondary: {
      main: '#757575', // A medium gray for secondary elements
    },
    background: {
      default: '#f8f8f8', // Off-white/light-gray background for a clean feel
      paper: '#ffffff', // Pure white for components like Cards
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontWeight: 300, // Light font weight for hero text (like the screenshot)
      fontSize: '4rem',
    },
  },
  components: {
    // Apply styling globally to components for a consistent feel
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Keeps button text professional (e.g., "Login" instead of "LOGIN")
          borderRadius: '4px',
        },
      },
    },
  },
});

export default theme;