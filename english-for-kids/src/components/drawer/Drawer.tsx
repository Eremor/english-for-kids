import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer as CustomDrawer, useMediaQuery } from '@mui/material';

import { cards } from '../../data/cards';

const Drawer: FC = () => {
  const matches = useMediaQuery('(min-width: 1440px)');
  const [open, setOpen] = useState(true);

  return (
    <CustomDrawer
      open={open}
      sx={{ zIndex: 10 }}
      PaperProps={{
        sx: { pt: 8, width: matches ? '25%' : '320px', alignItems: 'center' },
      }}
    >
      <Link to="/" style={{ textDecoration: 'none' }}>
        main page
      </Link>
      {cards.map(({ title, id }) => (
        <Link key={id} to={`/${title}`} style={{ textDecoration: 'none' }}>
          {title}
        </Link>
      ))}
    </CustomDrawer>
  );
};

export { Drawer };
