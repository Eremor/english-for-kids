import { Word } from '../interfaces/Word';

export interface BaseState {
  isOpenDrawer: boolean;
  isTrainMode: boolean;
  currentCategoryWords: Word[];
}

export interface GameState {
  roundWords: Word[];
  roundIndex: number;
  rightAnswers: Word[];
  roundAnswers: boolean[];
}
