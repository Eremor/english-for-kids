import React, { FC, useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from '../components/layout';
import { Card } from '../components/card';
import { Category } from '../interfaces/Category';
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
    <Layout sx={{ marginTop: 8 }}>
      {data.words.map(({ id, title, translate, image }) => (
        <Card key={id} title={title} translate={translate} image={image} />
      ))}
    </Layout>
  );
};

export { Categorypage };
