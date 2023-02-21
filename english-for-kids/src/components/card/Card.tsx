import React, { FC, MouseEventHandler, useState, useEffect } from 'react';
import { CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material';
import { RefreshRounded } from '@mui/icons-material';

import { useAppDispatch, useAppSelect } from '../../store/hooks';
import { addRightAnswers, setRoundIndex } from '../../store/slices/game';

import { Word } from '../../interfaces/Word';
import { CustomCard } from './CustomCard';
import { checkAnswer } from '../../utility/helpers';

type DisabledType = {
  disabled: boolean;
};

type CardProps = Word & DisabledType;

const Card: FC<CardProps> = ({ id, title, translate, image, audio, disabled }: CardProps) => {
  const dispatch = useAppDispatch();
  const { isTrainMode } = useAppSelect((state) => state.base);
  const { roundWords, roundIndex } = useAppSelect((state) => state.game);

  const [isPlay, setPlay] = useState(false);
  const [flip, setFlip] = useState(false);

  const handlerFlip: MouseEventHandler = (event) => {
    event.stopPropagation();
    setFlip(true);
  };

  const chooseAnswer = () => {
    if (checkAnswer(title, roundWords[roundIndex].title)) {
      dispatch(addRightAnswers({ id, title, translate, image, audio }));
      const index = roundIndex + 1;
      dispatch(setRoundIndex(index));
    }
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
        cursor: `${disabled ? 'default' : 'pointer'}`,
        boxShadow: `${!isTrainMode && 'none'}`,
        opacity: `${disabled && '0.2'}`,
      }}
      flip={flip ? flip.toString() : undefined}
      disabled={disabled}
      onClick={() => (isTrainMode ? setPlay(true) : chooseAnswer())}
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
              <IconButton onClick={handlerFlip}>
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
