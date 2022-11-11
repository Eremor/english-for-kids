import React from 'react';
import { ThemeProvider } from '@mui/material';

import Header from './components/header';
import Homepage from './pages/Homepage';

import theme from './utility/theme';

import './app.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Homepage />
    </ThemeProvider>
  );
};

export default App;
