import { combineReducers } from '@reduxjs/toolkit';
import baseSlice from './base';
import gameSlice from './game';

export default combineReducers({
  base: baseSlice,
  game: gameSlice,
});
