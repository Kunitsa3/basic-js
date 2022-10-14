const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const additionalStr = 'addition' in options && `${options.addition}`;
  const separator = options.separator || '+';
  const addSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';
  const repeatStr = `${str}`;
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;

  const additionalRepeated = additionalStr ? repeatStr + (Array(additionRepeatTimes).fill(additionalStr).join(addSeparator)) : repeatStr;
  return Array(repeatTimes).fill(additionalRepeated).join(separator);
}

module.exports = {
  repeater
};