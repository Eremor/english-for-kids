import React, { FC, useState } from 'react';
import { AppBar, Toolbar, IconButton, Container } from '@mui/material';
import { CloseRounded, MenuRounded } from '@mui/icons-material';

import Switch from '../switch';
import { Drawer } from '../drawer';

const Header: FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 0 }}>
      <Drawer />
      <Container
        maxWidth={false}
        sx={{ display: 'flex', alignItems: 'center', mt: 2, maxWidth: 1440 }}
      >
        <Toolbar sx={{ zIndex: 11 }}>
          <IconButton color="primary" size="large" onClick={() => setOpen((prev) => !prev)}>
            {isOpen ? <CloseRounded fontSize="large" /> : <MenuRounded fontSize="large" />}
          </IconButton>
        </Toolbar>
        <Switch sx={{ ml: 'auto' }} defaultChecked />
      </Container>
    </AppBar>
  );
};

export default Header;
