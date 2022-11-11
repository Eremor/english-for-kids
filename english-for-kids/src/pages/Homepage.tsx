import React, { FC } from 'react';
import { Container } from '@mui/material';
import Category from '../components/category';

const Homepage: FC = () => {
  return (
    <Container maxWidth="lg">
      <Category />
    </Container>
  );
};

export default Homepage;
