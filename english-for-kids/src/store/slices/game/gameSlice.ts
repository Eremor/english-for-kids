import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState } from '../../types';
import { Word } from '../../../interfaces/Word';

const initialGameState: GameState = {
  roundWords: [],
  roundIndex: 0,
  rightAnswers: [],
};

export const gameSLice = createSlice({
  name: 'game',
  initialState: initialGameState,
  reducers: {
    setRoundWords: (state, action: PayloadAction<Word[]>) => {
      state.roundWords = action.payload;
    },
    // setCurrentWord: (state, action: PayloadAction<Word>) => {
    //   state.currentWord = action.payload;
    // },
    setRoundIndex: (state, action: PayloadAction<number>) => {
      state.roundIndex = action.payload;
    },
    addRightAnswers: (state, action: PayloadAction<Word>) => {
      state.rightAnswers.push(action.payload);
    },
    cleanGameSlice: () => initialGameState,
  },
});

export const { setRoundWords, setRoundIndex, addRightAnswers, cleanGameSlice } = gameSLice.actions;
export default gameSLice.reducer;
