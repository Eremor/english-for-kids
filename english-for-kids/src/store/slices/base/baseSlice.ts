import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isOpenDrawer: false,
};

export const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    toggleMenu: (state, action: PayloadAction<boolean>) => {
      state.isOpenDrawer = action.payload;
    },
  },
});

export const { toggleMenu } = baseSlice.actions;
export default baseSlice.reducer;
