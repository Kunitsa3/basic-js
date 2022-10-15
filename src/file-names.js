const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(name) {
  const [finalArray, finalObject] = name.reduce(([arr, obj], curr) => {
    console.log(curr, obj, arr);
    if (obj[curr]) {
      return [
        [...arr, `${curr}(${obj[curr]})`], {
          ...obj,
          [curr]: (obj[curr] + 1)
        }
      ]
    }
    return arr.indexOf(curr) === -1 ? [
      [...arr, curr], {
        ...obj,
        [curr]: 1
      }
    ] : [
      [...arr, `${curr}(1)`], {
        ...obj,
        [curr]: 1
      }
    ]
  }, [
    [], {}
  ])

  return finalArray;
}

module.exports = {
  renameFiles
};