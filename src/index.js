// src/index.js (FIXED for React 18+)

import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the import path change!
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

// 1. Get the root DOM element
const rootElement = document.getElementById('root');

// 2. Create the React root
const root = ReactDOM.createRoot(rootElement);

// 3. Render the application using the new root API
root.render(
  <React.StrictMode>
    {/* Apply the theme and reset CSS */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);