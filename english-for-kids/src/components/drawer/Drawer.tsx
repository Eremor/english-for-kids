import React, { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Drawer as CustomDrawer, useMediaQuery, MenuList, useTheme } from '@mui/material';

import { MenuLink } from '../link/MenuLink';
import { cards } from '../../data/cards';

const Drawer: FC = () => {
  const matches = useMediaQuery('(min-width: 1440px)');
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const theme = useTheme();

  const drawActiveLink = (link: string): string => {
    const active = theme.palette.secondary.main;
    const base = theme.palette.primary.main;

    return location.pathname === link ? active : base;
  };

  return (
    <CustomDrawer
      open={open}
      sx={{ zIndex: 10 }}
      PaperProps={{
        sx: { pt: 8, width: matches ? '25%' : '320px', alignItems: 'center' },
      }}
      onClose={() => setOpen(false)}
    >
      <MenuList sx={{ width: '100%' }}>
        <MenuLink to="/" title="main page" color={`${drawActiveLink('/')}`} />
        {cards.map(({ title, id }) => (
          <MenuLink key={id} to={title} title={title} color={`${drawActiveLink(`/${title}`)}`} />
        ))}
      </MenuList>
    </CustomDrawer>
  );
};

export { Drawer };
