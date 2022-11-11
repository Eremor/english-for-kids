import React from 'react';
import { ThemeProvider } from '@mui/material';
import Header from './components/header';
import theme from './utility/theme';
import './app.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

export default App;
