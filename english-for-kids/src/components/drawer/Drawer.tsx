import React, { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Drawer as CustomDrawer, useMediaQuery, MenuList, useTheme } from '@mui/material';

import { MenuLink } from '../link/MenuLink';
import { cards } from '../../data/cards';

const Drawer: FC = () => {
  const matches = useMediaQuery('(min-width: 1440px)');
  const [open, setOpen] = useState(false);

  return (
    <CustomDrawer
      open={open}
      sx={{ zIndex: 10 }}
      PaperProps={{
        sx: { pt: 10, width: matches ? '25%' : '320px', alignItems: 'center' },
      }}
      onClose={() => setOpen(false)}
    >
      <MenuList sx={{ width: '100%' }}>
        <MenuLink to="" title="main page" />
        {cards.map(({ title, id }) => (
          <MenuLink key={id} to={title} title={title} />
        ))}
      </MenuList>
    </CustomDrawer>
  );
};

export { Drawer };
