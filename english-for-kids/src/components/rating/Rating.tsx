import React, { FC } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

type RatingProps = {
  arr: boolean[];
};

const Rating: FC<RatingProps> = ({ arr }) => {
  return (
    <>
      {arr.map((item, index) =>
        item ? (
          <Favorite key={index.toString()} color="primary" />
        ) : (
          <FavoriteBorder key={index.toString()} color="primary" />
        )
      )}
    </>
  );
};

export { Rating };
