import React, { FC } from 'react';
import { Container, ContainerProps } from '@mui/material';

const Layout: FC<ContainerProps> = (props) => {
  const { children, sx } = props;
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
        maxWidth: 1440,
        gap: 5,
        ...sx,
      }}
    >
      {children}
    </Container>
  );
};

export { Layout };
