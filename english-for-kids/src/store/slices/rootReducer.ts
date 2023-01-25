import { combineReducers } from '@reduxjs/toolkit';
import baseSlice from './base';

export default combineReducers({
  base: baseSlice,
});
