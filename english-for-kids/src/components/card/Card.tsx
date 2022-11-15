import React, { FC, MouseEventHandler, useState } from 'react';
import { CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material';
import { RefreshRounded } from '@mui/icons-material';

import CustomCard from './CustomCard';

const Card: FC = () => {
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
        <CardMedia component="img" height="203" sx={{ backgroundColor: 'grey' }} />
        <CardContent>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" sx={{ fontWeight: '500' }}>
              Dragon
            </Typography>
            <IconButton onClick={handleFlip}>
              <RefreshRounded />
            </IconButton>
          </Stack>
        </CardContent>
      </Stack>
      <Stack onMouseLeave={() => setFlip(false)} className="back">
        <CardMedia component="img" height="203" sx={{ backgroundColor: 'grey' }} />
        <CardContent>
          <Typography variant="h5" sx={{ mt: 0.5, fontWeight: '500' }}>
            Дракон
          </Typography>
        </CardContent>
      </Stack>
    </CustomCard>
  );
};

export default Card;