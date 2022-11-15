import React, { FC } from 'react';
import { Container } from '@mui/material';
import Category from '../components/category';
import Card from '../components/card';

const Homepage: FC = () => {
  return (
    <Container maxWidth="lg">
      <Category />
      <Card />
    </Container>
  );
};

export default Homepage;
