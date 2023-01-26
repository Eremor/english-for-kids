import React, { FC } from 'react';
import { AppBar, Container } from '@mui/material';

import { useAppSelect, useAppDispatch } from '../../store/hooks';
import { toggleTrainMode } from '../../store/slices/base';

import { Switch } from '../switch';
import { Drawer } from '../drawer';
import { Toolbar } from '../toolbar';

const Header: FC = () => {
  const { isTrainMode } = useAppSelect((state) => state.base);
  const dispatch = useAppDispatch();

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 0 }}>
      <Drawer />
      <Container
        maxWidth={false}
        sx={{ display: 'flex', alignItems: 'center', mt: 2, maxWidth: 1440 }}
      >
        <Toolbar />
        <Switch
          sx={{ ml: 'auto' }}
          checked={isTrainMode}
          onChange={() => dispatch(toggleTrainMode(!isTrainMode))}
        />
      </Container>
    </AppBar>
  );
};

export { Header };
