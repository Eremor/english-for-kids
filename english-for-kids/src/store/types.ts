import { Category } from '../interfaces/Category';
import { Word } from '../interfaces/Word';

export interface BaseState {
  isOpenDrawer: boolean;
  isTrainMode: boolean;
  currentCategoryWords: Word[];
}

export interface GameState {
  roundWords: Word[];
  roundIndex: number;
  // currentWord: Word | null;
}
