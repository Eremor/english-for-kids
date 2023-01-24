import React, { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Drawer as CustomDrawer, useMediaQuery, MenuList, MenuItem, useTheme } from '@mui/material';

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
    >
      <MenuList sx={{ width: '100%' }}>
        <MenuItem component={Link} to="/" sx={{ color: `${drawActiveLink('/')}` }}>
          main page
        </MenuItem>
        {cards.map(({ title, id }) => (
          <MenuItem
            component={Link}
            key={id}
            to={`/${title}`}
            sx={{ color: `${drawActiveLink(`/${title}`)}` }}
          >
            {title}
          </MenuItem>
        ))}
      </MenuList>
    </CustomDrawer>
  );
};

export { Drawer };
