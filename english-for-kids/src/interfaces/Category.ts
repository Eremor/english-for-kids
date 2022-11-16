import { Word } from "./Word";

export interface Category {
  id: number;
  title: string;
  image: string;
  words: Word[];
}