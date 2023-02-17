import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '@mui/material';
import { ReplayRounded } from '@mui/icons-material';

import { useAppSelect, useAppDispatch } from '../../store/hooks';
import { setCurrentCategoryWords } from '../../store/slices/base';

import { Layout } from '../../components/layout';
import { Card } from '../../components/card';

const Categorypage: FC = () => {
  const { category } = useParams();
  const dispatch = useAppDispatch();
  const { isTrainMode, currentCategoryWords } = useAppSelect((state) => state.base);

  const [isGameStart, setGameStart] = useState(false);

  useEffect(() => {
    dispatch(setCurrentCategoryWords(category!));
  }, [category, dispatch]);

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
            >
              Start game
            </Button>
          ) : (
            <Button variant="contained" color="secondary">
              <ReplayRounded sx={{ color: 'white' }} fontSize="medium" />
            </Button>
          ))}
      </Layout>
    </>
  );
};

export { Categorypage };
