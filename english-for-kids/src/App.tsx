import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { Header } from './components/header';
import Homepage from './pages/Homepage';
import { Categorypage } from './pages/Categorypage';

import theme from './utility/theme';

import './app.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/:category" element={<Categorypage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
