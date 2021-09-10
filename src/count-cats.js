import {
  NotImplementedError
} from '../extensions/index.js';

export default function countCats(matrix) {
  let count = 0;
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] === "^^") {
        count++;
      }
    }
  }
  return count;
}