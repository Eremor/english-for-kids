import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '@mui/material';
import { ReplayRounded } from '@mui/icons-material';

import { useAppSelect, useAppDispatch } from '../../store/hooks';
import { setCurrentCategoryWords } from '../../store/slices/base';
import { setRoundWords } from '../../store/slices/game';

import { shuffleArray } from '../../utility/helpers';

import { Layout } from '../../components/layout';
import { Card } from '../../components/card';

const Categorypage: FC = () => {
  const { category } = useParams();
  const dispatch = useAppDispatch();
  const { isTrainMode, currentCategoryWords } = useAppSelect((state) => state.base);
  const { roundWords, roundIndex } = useAppSelect((state) => state.game);

  const [isGameStart, setGameStart] = useState(false);

  useEffect(() => {
    dispatch(setCurrentCategoryWords(category!));
  }, [category, dispatch]);

  useEffect(() => {
    if (isTrainMode) {
      setGameStart(false);
    } else {
      dispatch(setRoundWords(shuffleArray(currentCategoryWords)));
    }
  }, [isTrainMode, currentCategoryWords, dispatch]);

  const repeatCurrentSound = (currentSound: string) => {
    const sound = new Audio(currentSound);
    sound.play();
  };

  return (
    <>
      <Layout sx={{ marginTop: 8 }}>
        {currentCategoryWords.map(({ id, title, translate, image, audio }) => (
          <Card key={id} title={title} translate={translate} image={image} audio={audio} />
        ))}
      </Layout>
      <Layout sx={{ marginY: 4, justifyContent: `${isGameStart && 'center'}` }}>
        {!isTrainMode &&
          (!isGameStart ? (
            <Button
              variant="contained"
              sx={{ borderRadius: '15px', color: 'white', fontWeight: '400' }}
              color="secondary"
              onClick={() => setGameStart(true)}
            >
              Start game
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => repeatCurrentSound(roundWords[roundIndex].audio)}
            >
              <ReplayRounded sx={{ color: 'white' }} fontSize="medium" />
            </Button>
          ))}
      </Layout>
    </>
  );
};

export { Categorypage };