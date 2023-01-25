import React, { FC, useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

import { Category } from '../interfaces/Category';
import { Card } from '../components/card';
import { cards } from '../data/cards';

const Categorypage: FC = () => {
  const initData: Category = useMemo(
    () => ({
      id: '',
      image: '',
      title: '',
      words: [],
    }),
    []
  );
  const { category } = useParams();
  const [data, setData] = useState<Category>(initData);

  useEffect(() => {
    const foundCategory: Category = cards.find((card) => card.title === category) || initData;
    setData(foundCategory);
  }, [category, initData]);

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
      {data.words.map(({ id, title, translate, image }) => (
        <Card key={id} title={title} translate={translate} image={image} />
      ))}
    </Container>
  );
};

export { Categorypage };
