const { NotImplementedError } = require('../extensions/index.js');

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
function renameFiles(names) {
  const arr = [];
  let count = 1;
  for (let i = 0; i < names.length; i++) {
    if (arr.includes(names[i])) {
      arr.push(names[i] + `(${count})`);
    } else {
      arr.push(names[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] === arr[k] && k !== i) {
        arr[k] = `${arr[k].slice(0, -3)}(${count + 1})`;
      }
    }
    count = 1;
  }
  return arr;
}

module.exports = {
  renameFiles,
};
