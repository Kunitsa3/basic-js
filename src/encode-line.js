const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const letters = str.split('');
  const encode = letters.reduce((acc, curr, index) => {
    if (curr === letters[index - 1]) {
      const arrayWithoutCurrent = acc.slice(0, -1);
      const [number, letter] = acc[acc.length - 1];
      return [...arrayWithoutCurrent, [number + 1, letter]]
    }
    return [...acc, [1, curr]];
  }, [])
  return encode.flat().filter( el => el !== 1).join('');
}

module.exports = {
  encodeLine
};