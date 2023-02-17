import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState } from '../../types';
import { Word } from '../../../interfaces/Word';

const initialGameState: GameState = {
  roundWords: [],
};

export const gameSLice = createSlice({
  name: 'game',
  initialState: initialGameState,
  reducers: {
    setRoundWords: (state, action: PayloadAction<Word[]>) => {
      state.roundWords = action.payload;
    },
  },
});

export const { setRoundWords } = gameSLice.actions;
export default gameSLice.reducer;
