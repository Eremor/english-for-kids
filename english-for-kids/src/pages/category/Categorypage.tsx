import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '@mui/material';
import { ReplayRounded } from '@mui/icons-material';

import { useAppSelect, useAppDispatch } from '../../store/hooks';
import { setCurrentCategoryWords, toggleTrainMode } from '../../store/slices/base';
import { setRoundWords, cleanGameSlice } from '../../store/slices/game';

import { shuffleArray } from '../../utility/helpers';

import { Layout } from '../../components/layout';
import { Card } from '../../components/card';

const Categorypage: FC = () => {
  const { category } = useParams();
  const dispatch = useAppDispatch();
  const { isTrainMode, currentCategoryWords } = useAppSelect((state) => state.base);
  const { roundWords, roundIndex, rightAnswers } = useAppSelect((state) => state.game);

  const [isGameStart, setGameStart] = useState(false);

  const playCurrentSound = (currentSound: string): void => {
    const sound = new Audio(currentSound);
    sound.play();
  };

  const checkDisabledCards = (id: string): boolean => {
    return rightAnswers.find((answer) => answer.id === id) !== undefined;
  };

  useEffect(() => {
    dispatch(setCurrentCategoryWords(category as string));
  }, [category, dispatch]);

  useEffect(() => {
    if (isTrainMode) {
      setGameStart(false);
      dispatch(cleanGameSlice());
    } else {
      dispatch(setRoundWords(shuffleArray(currentCategoryWords)));
    }
  }, [isTrainMode, currentCategoryWords, dispatch]);

  useEffect(() => {
    if (isGameStart) {
      if (roundIndex < roundWords.length) {
        playCurrentSound(roundWords[roundIndex].audio);
      } else {
        // end game
        dispatch(toggleTrainMode(true));
      }
    }
  }, [isGameStart, roundIndex, roundWords, dispatch]);

  return (
    <>
      <Layout sx={{ marginTop: 8 }}>
        {currentCategoryWords.map(({ id, title, translate, image, audio }) => (
          <Card
            key={id}
            id={id}
            title={title}
            translate={translate}
            image={image}
            audio={audio}
            disabled={checkDisabledCards(id)}
          />
        ))}
      </Layout>
      <Layout sx={{ marginY: 4, justifyContent: 'center' }}>
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
              onClick={() => playCurrentSound(roundWords[roundIndex].audio)}
            >
              <ReplayRounded sx={{ color: 'white' }} fontSize="medium" />
            </Button>
          ))}
      </Layout>
    </>
  );
};

export { Categorypage };
