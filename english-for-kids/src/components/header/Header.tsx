import React, { FC } from 'react';
import { AppBar, Container } from '@mui/material';

import Switch from '../switch';
import { Drawer } from '../drawer';
import { Toolbar } from '../toolbar';

const Header: FC = () => {
  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 0 }}>
      <Drawer />
      <Container
        maxWidth={false}
        sx={{ display: 'flex', alignItems: 'center', mt: 2, maxWidth: 1440 }}
      >
        <Toolbar />
        <Switch sx={{ ml: 'auto' }} defaultChecked />
      </Container>
    </AppBar>
  );
};

export { Header };
