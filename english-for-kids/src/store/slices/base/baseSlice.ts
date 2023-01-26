import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isOpenDrawer: false,
  isTrainMode: true,
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
