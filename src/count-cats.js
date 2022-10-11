const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(catsArray) {
  const flatedArray = catsArray.flat();
  const arrayWithoutCats = flatedArray.filter(elem => elem !== '^^');
  return flatedArray.length - arrayWithoutCats.length;
}

module.exports = {
  countCats
};
