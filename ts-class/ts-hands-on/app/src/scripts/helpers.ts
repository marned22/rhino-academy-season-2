import { Card } from "./types.js";

export const shuffleArray = (array: Card[]): Card[] => {
  const result = [...array];
  let j = array.length;
  let temp;
  let i = 0;

  while (j) {
      i = Math.floor(Math.random() * j--);
      temp = result[j];
      result[j] = result[i];
      result[i] = temp;
      // [array[i], array[j]] = [array[j], array[i]];
  }

  return result;
}

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
