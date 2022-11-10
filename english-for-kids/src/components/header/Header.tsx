import React, { FC, useState } from 'react';
import { AppBar, Toolbar, IconButton, Container } from '@mui/material';
import { CloseRounded, MenuRounded } from '@mui/icons-material';

const Header: FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 0 }}>
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton color="primary" size="large" onClick={() => setOpen((prev) => !prev)}>
            {isOpen ? <CloseRounded fontSize="large" /> : <MenuRounded fontSize="large" />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
