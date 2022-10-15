const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(m) {
  const matrix = [...m];
  const lines = matrix.length;
  const columns = matrix[0].length;
  const resultsArray = Array(lines).fill(null).map(() => Array(columns).fill(0));
  for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {
      if (i + 1 < lines && matrix[i + 1][j]) {
        resultsArray[i][j] = +resultsArray[i][j] + 1
      };
      if (j + 1 < columns && matrix[i][j + 1]) {
        resultsArray[i][j] = +resultsArray[i][j] + 1
      };
      if (i - 1 >= 0 && matrix[i - 1][j]) {
        resultsArray[i][j] = +resultsArray[i][j] + 1
      };
      if (j - 1 >= 0 && matrix[i][j - 1]) {
        resultsArray[i][j] = +resultsArray[i][j] + 1
      };
      if (i - 1 >= 0 && j - 1 >= 0 && matrix[i - 1][j - 1]) {
        resultsArray[i][j] = +resultsArray[i][j] + 1
      };
      if (i + 1 < lines && j - 1 >= 0 && matrix[i + 1][j - 1]) {
        resultsArray[i][j] = +resultsArray[i][j] + 1
      };
      if (i + 1 < lines && j + 1 < columns && matrix[i + 1][j + 1]) {
        resultsArray[i][j] = +resultsArray[i][j] + 1
      };
      if (i - 1 >= 0 && j + 1 < columns && matrix[i - 1][j + 1]) {
        resultsArray[i][j] = +resultsArray[i][j] + 1
      };

    }
  }
  return resultsArray;
}

module.exports = {
  minesweeper
};