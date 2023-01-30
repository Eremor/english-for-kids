import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BaseState } from '../../types';
import { cards } from '../../../data/cards';

const initialState: BaseState = {
  isOpenDrawer: false,
  isTrainMode: true,
  currentCategoryWords: [],
};

export const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    toggleMenu: (state, action: PayloadAction<boolean>) => {
      state.isOpenDrawer = action.payload;
    },
    toggleTrainMode: (state, action: PayloadAction<boolean>) => {
      state.isTrainMode = action.payload;
    },
    setCurrentCategoryWords: (state, action: PayloadAction<string>) => {
      const currentCategoryData = cards.find((category) => category.title === action.payload);
      state.currentCategoryWords = currentCategoryData!.words;
    },
  },
});

export const { toggleMenu, toggleTrainMode, setCurrentCategoryWords } = baseSlice.actions;
export default baseSlice.reducer;
