import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Category } from '../components/category';
import { Layout } from '../components/layout';
import { cards } from '../data/cards';

const Homepage: FC = () => {
  return (
    <Layout sx={{ marginTop: 8 }}>
      {cards.map((category) => (
        <Link
          key={category.id}
          to={`/${category.title}`}
          style={{ textDecoration: 'none', width: '100%', maxWidth: '295px' }}
        >
          <Category title={category.title} image={category.image} length={category.words.length} />
        </Link>
      ))}
    </Layout>
  );
};

export { Homepage };
