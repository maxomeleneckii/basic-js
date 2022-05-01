const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  err: "You can't remove incorrect link!",
  getLength() {
    this.arr.length;
    return this;
  },
  addLink(value) {
    arguments.length === 0
      ? this.arr.push(`(  )`)
      : this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      this.arr.length < position ||
      position <= 0 ||
      typeof position !== 'number' ||
      isNaN(position)
    ) {
      this.arr = [];
      throw new Error(this.err);
    } else {
      this.arr.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let string = this.arr.join('~~');
    this.arr = [];
    return string;
  },
};

module.exports = {
  chainMaker,
};
