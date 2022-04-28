const { NotImplementedError } = require('../extensions/index.js');

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
  let {
    repeatTimes = 1,
    separator = '+',
    additionSeparator = '|',
    addition,
    additionRepeatTimes = 1,
  } = options;
  const arr = [];
  let arr2 = [];
  for (let i = 0; i < repeatTimes; i++) {
    arr2 = [];
    if (additionRepeatTimes === undefined) {
      arr.push(str);
    } else {
      for (let k = 0; k < additionRepeatTimes; k++) {
        if (addition === null) {
          arr2.push(addition + '');
        } else {
          arr2.push(addition);
        }
      }
      const arrStr = arr2.join(`${additionSeparator}`);
      arr.push(str + arrStr);
    }
  }
  return arr.join(`${separator}`);
}

module.exports = {
  repeater,
};
