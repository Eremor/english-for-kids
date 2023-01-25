import React, { FC } from 'react';
import { AppBar, Toolbar, IconButton, Container } from '@mui/material';
import { CloseRounded, MenuRounded } from '@mui/icons-material';

import { useAppSelect, useAppDispatch } from '../../store/hooks';
import { toggleMenu } from '../../store/slices/base';

import Switch from '../switch';
import { Drawer } from '../drawer';

const Header: FC = () => {
  const { isOpenDrawer } = useAppSelect((state) => state.base);
  const dispatch = useAppDispatch();

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 0 }}>
      <Drawer />
      <Container
        maxWidth={false}
        sx={{ display: 'flex', alignItems: 'center', mt: 2, maxWidth: 1440 }}
      >
        <Toolbar sx={{ zIndex: 11 }}>
          <IconButton
            color="primary"
            size="large"
            onClick={() => dispatch(toggleMenu(!isOpenDrawer))}
          >
            {isOpenDrawer ? <CloseRounded fontSize="large" /> : <MenuRounded fontSize="large" />}
          </IconButton>
        </Toolbar>
        <Switch sx={{ ml: 'auto' }} defaultChecked />
      </Container>
    </AppBar>
  );
};

export default Header;
