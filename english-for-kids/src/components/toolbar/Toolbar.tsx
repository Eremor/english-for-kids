import React, { FC } from 'react';
import { Toolbar as CustomToolbar, IconButton } from '@mui/material';
import { CloseRounded, MenuRounded } from '@mui/icons-material';

import { useAppSelect, useAppDispatch } from '../../store/hooks';
import { toggleMenu } from '../../store/slices/base';

const Toolbar: FC = () => {
  const { isOpenDrawer } = useAppSelect((state) => state.base);
  const dispatch = useAppDispatch();

  return (
    <CustomToolbar sx={{ zIndex: 11 }}>
      <IconButton color="primary" size="large" onClick={() => dispatch(toggleMenu(!isOpenDrawer))}>
        {isOpenDrawer ? <CloseRounded fontSize="large" /> : <MenuRounded fontSize="large" />}
      </IconButton>
    </CustomToolbar>
  );
};

export { Toolbar };
