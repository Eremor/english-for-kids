import React, { FC } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

type RatingProps = {
  arr: boolean[];
};

const Rating: FC<RatingProps> = ({ arr }) => {
  return (
    <>{arr.map((item) => (item ? <Favorite color="error" /> : <FavoriteBorder color="error" />))}</>
  );
};

export { Rating };
