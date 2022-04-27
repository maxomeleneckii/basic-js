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
  const string = n.toString();
  const arr = string.split('').map((el) => +el);
  const minNum = Math.min.apply(null, arr);
  if (arr.length === 3 && arr.length - 1 === minNum) {
    return +arr.splice(1, arr.length - 1).join('');
  }
  return +string.replace(minNum, '');
}

module.exports = {
  deleteDigit,
};
