import React, { FC, MouseEventHandler, useState } from 'react';
import { CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material';
import { RefreshRounded } from '@mui/icons-material';

import CustomCard from './CustomCard';
import { Word } from '../../interfaces/Word';

type CardProps = Pick<Word, 'title' | 'translate' | 'image'>;

const Card: FC<CardProps> = ({ title, translate, image }: CardProps) => {
  const [flip, setFlip] = useState(false);

  const handleFlip: MouseEventHandler = (event) => {
    event.stopPropagation();
    setFlip(true);
  };

  return (
    <CustomCard
      sx={{ maxWidth: 295, borderRadius: 3, cursor: 'pointer' }}
      flip={flip ? flip.toString() : undefined}
    >
      <Stack className="front">
        <CardMedia component="img" image={image} height="203" sx={{ backgroundColor: 'grey' }} />
        <CardContent>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" sx={{ fontWeight: '500', textTransform: 'capitalize' }}>
              {title}
            </Typography>
            <IconButton onClick={handleFlip}>
              <RefreshRounded />
            </IconButton>
          </Stack>
        </CardContent>
      </Stack>
      <Stack onMouseLeave={() => setFlip(false)} className="back">
        <CardMedia component="img" image={image} height="203" sx={{ backgroundColor: 'grey' }} />
        <CardContent>
          <Typography variant="h5" sx={{ mt: 0.5, fontWeight: '500', textTransform: 'capitalize' }}>
            {translate}
          </Typography>
        </CardContent>
      </Stack>
    </CustomCard>
  );
};

export default Card;
