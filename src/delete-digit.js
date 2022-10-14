const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbers = n.toString().split('');
  return +numbers.reduce((acc, curr, i) => {
    const currentNumber = numbers.filter((el, index) => i !== index).join('');
    return currentNumber > acc ? currentNumber : acc;
  }, 0)
}

module.exports = {
  deleteDigit
};
