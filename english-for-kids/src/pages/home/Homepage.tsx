import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Category } from '../../components/category';
import { Layout } from '../../components/layout';
import { cards } from '../../data/cards';

const Homepage: FC = () => {
  return (
    <Layout sx={{ marginY: 8, gap: 5 }}>
      {cards.map(({ id, title, image, words }) => (
        <Link
          key={id}
          to={`/${title}`}
          style={{ textDecoration: 'none', width: '100%', maxWidth: '295px' }}
        >
          <Category title={title} image={image} length={words.length} />
        </Link>
      ))}
    </Layout>
  );
};

export { Homepage };
