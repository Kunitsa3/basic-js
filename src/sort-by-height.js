const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr ) {
  const sortedNumbers = arr.filter(el => el !== -1). sort((a,b) => a - b);
  let currentIndexOfSorted = -1;
  return arr.map(element => {
    if (element === -1) {
      return element;
    } 
    currentIndexOfSorted += 1;
    return sortedNumbers[currentIndexOfSorted];
  })
}

module.exports = {
  sortByHeight
};
