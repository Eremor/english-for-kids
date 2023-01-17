import React, { FC } from 'react';
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
      {cards.map((card) => (
        <Category key={card.id} title={card.title} image={card.image} length={card.words.length} />
      ))}
    </Container>
  );
};

export default Homepage;
