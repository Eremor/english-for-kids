import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

import Category from '../components/category';
import { cards } from '../data/cards';

const Homepage: FC = () => {
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
      {cards.map((category) => (
        <Link key={category.id} to={`/${category.title}`} style={{ textDecoration: 'none' }}>
          <Category title={category.title} image={category.image} length={category.words.length} />
        </Link>
      ))}
    </Container>
  );
};

export default Homepage;
