import React, { FC } from 'react';
import { Toolbar as MUIToolbar, IconButton } from '@mui/material';
import { CloseRounded, MenuRounded } from '@mui/icons-material';

import { useAppSelect, useAppDispatch } from '../../store/hooks';
import { toggleMenu } from '../../store/slices/base';

const Toolbar: FC = () => {
  const { isOpenDrawer } = useAppSelect((state) => state.base);
  const dispatch = useAppDispatch();

  return (
    <MUIToolbar sx={{ zIndex: 11, paddingX: 0 }}>
      <IconButton color="primary" size="large" onClick={() => dispatch(toggleMenu(!isOpenDrawer))}>
        {isOpenDrawer ? <CloseRounded fontSize="large" /> : <MenuRounded fontSize="large" />}
      </IconButton>
    </MUIToolbar>
  );
};

export { Toolbar };
