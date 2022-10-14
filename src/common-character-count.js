const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const firstStrLetters = s1.split('').reduce((acc, curr) => {
    return acc[curr] ? {
      ...acc,
      [curr]: acc[curr] + 1
    } : {
      ...acc,
      [curr]: 1
    }
  }, {})
  const secondStrLetters = s2.split('').reduce((acc, curr) => {
    return acc[curr] ? {
      ...acc,
      [curr]: acc[curr] + 1
    } : {
      ...acc,
      [curr]: 1
    }
  }, {})

  return Object.entries(firstStrLetters).reduce((acc, [letter, number]) => {
    if (letter in secondStrLetters) {
      return acc + Math.min(number, secondStrLetters[letter])
    }
    return acc;
  }, 0)
}

module.exports = {
  getCommonCharacterCount
};