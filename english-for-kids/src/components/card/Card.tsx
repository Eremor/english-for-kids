import React, { FC, MouseEventHandler, useState, useEffect } from 'react';
import { CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material';
import { RefreshRounded } from '@mui/icons-material';

import { useAppSelect } from '../../store/hooks';

import { CustomCard } from './CustomCard';
import { Word } from '../../interfaces/Word';

type CardProps = Pick<Word, 'title' | 'translate' | 'image' | 'audio'>;

const Card: FC<CardProps> = ({ title, translate, image, audio }: CardProps) => {
  const [isPlay, setPlay] = useState(false);
  const [flip, setFlip] = useState(false);
  const { isTrainMode } = useAppSelect((state) => state.base);

  const handleFlip: MouseEventHandler = (event) => {
    event.stopPropagation();
    setFlip(true);
  };

  useEffect(() => {
    const sound = new Audio(audio);
    if (isPlay) {
      sound.play();
    } else {
      sound.pause();
      sound.currentTime = 0;
    }
    sound.addEventListener('ended', () => setPlay(false));
  }, [isPlay, audio]);

  return (
    <CustomCard
      sx={{
        maxWidth: 295,
        borderRadius: 3,
        cursor: 'pointer',
        boxShadow: `${!isTrainMode && 'none'}`,
      }}
      flip={flip ? flip.toString() : undefined}
      onClick={() => (isTrainMode ? setPlay(true) : console.log('set answer'))}
    >
      <Stack className="front">
        <CardMedia
          component="img"
          image={image}
          height={isTrainMode ? '203' : '100%'}
          sx={{ backgroundColor: 'grey' }}
        />
        {isTrainMode && (
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
        )}
      </Stack>
      {isTrainMode && (
        <Stack onMouseLeave={() => setFlip(false)} className="back">
          <CardMedia component="img" image={image} height="203" sx={{ backgroundColor: 'grey' }} />
          <CardContent>
            <Typography
              variant="h5"
              sx={{ mt: 0.5, fontWeight: '500', textTransform: 'capitalize' }}
            >
              {translate}
            </Typography>
          </CardContent>
        </Stack>
      )}
    </CustomCard>
  );
};

export { Card };
