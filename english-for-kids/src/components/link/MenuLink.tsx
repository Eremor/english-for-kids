import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '@mui/material';

interface MenuLinkProps {
  to: string;
  title: string;
  color: string;
}

const MenuLink: FC<MenuLinkProps> = ({ to, title, color }) => {
  return (
    <MenuItem component={Link} to={to} sx={{ color, textTransform: 'capitalize', fontSize: 20 }}>
      {title}
    </MenuItem>
  );
};

export { MenuLink };
