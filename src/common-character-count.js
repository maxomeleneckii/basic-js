const { NotImplementedError } = require('../extensions/index.js');

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
let count = 0;
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let rep = s2;
  for (let i = 0; i < s1.length; i++) {
    if (rep.includes(s1[i])) {
      let letter = s1[i];
      count++;
      rep = rep.replace(letter, '');
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
