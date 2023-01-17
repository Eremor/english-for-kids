import { Word } from './Word';

export interface Category {
  id: string;
  title: string;
  image: string;
  words: Word[];
}
