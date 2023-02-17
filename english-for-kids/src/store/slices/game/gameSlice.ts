import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState } from '../../types';
import { Word } from '../../../interfaces/Word';

const initialGameState: GameState = {
  roundWords: [],
  // currentWord: null,
  roundIndex: 0,
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
  },
});

export const { setRoundWords, setRoundIndex } = gameSLice.actions;
export default gameSLice.reducer;
