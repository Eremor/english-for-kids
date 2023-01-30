import { Category } from '../interfaces/Category';
import { Word } from '../interfaces/Word';

export interface BaseState {
  isOpenDrawer: boolean;
  isTrainMode: boolean;
  currentCategoryWords: Word[];
}
