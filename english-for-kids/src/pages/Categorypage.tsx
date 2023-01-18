import React, { FC } from 'react';
import { Container } from '@mui/material';

const Categorypage: FC = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: {
          lg: 'flex-start',
          md: 'center',
          xs: 'center',
        },
        marginTop: 10,
        maxWidth: 1440,
        gap: 5,
      }}
    >
      <h1>Category page</h1>
    </Container>
  );
};

export { Categorypage };
