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
  },
});

export const { toggleMenu, toggleTrainMode } = baseSlice.actions;
export default baseSlice.reducer;
