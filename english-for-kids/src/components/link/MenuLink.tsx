import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem, useTheme } from '@mui/material';

import { useAppDispatch } from '../../store/hooks';
import { toggleMenu } from '../../store/slices/base';

interface MenuLinkProps {
  to: string;
  title: string;
}

const MenuLink: FC<MenuLinkProps> = ({ to, title }) => {
  const location = useLocation();
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const drawActiveLink = (link: string): string => {
    const active = theme.palette.secondary.main;
    const base = theme.palette.primary.main;

    return location.pathname === link ? active : base;
  };

  return (
    <MenuItem
      component={Link}
      to={to}
      sx={{
        color: `${drawActiveLink(`/${to}`)}`,
        textTransform: 'capitalize',
        fontSize: 22,
        fontWeight: 700,
        pl: 6,
        paddingY: '10px',
      }}
      onClick={() => dispatch(toggleMenu(false))}
    >
      {title}
    </MenuItem>
  );
};

export { MenuLink };
