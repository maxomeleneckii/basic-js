const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type === false ? type : true;
    const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.alph = alph;
  }
  encrypt(text, key) {
    if (
      arguments.length != 2 ||
      arguments[0] == undefined ||
      arguments[1] == undefined
    ) {
      throw new Error('Incorrect arguments!');
    }
    const output = [];
    const upKey = key.toUpperCase().split('');
    const upCase = text.toUpperCase().split('');
    let j = 0;
    for (let i = 0; i < upCase.length; i++) {
      let idx = this.alph.indexOf(upCase[i]);
      if (idx >= 0) {
        let idxKey = this.alph.indexOf(upKey[j % upKey.length]);
        let cur = (idx + idxKey) % 26;
        output.push(this.alph[cur]);
        j++;
      } else {
        output.push(upCase[i]);
      }
    }
    return this.type ? output.join('') : output.reverse().join('');
  }
  decrypt(text, key) {
    if (
      arguments.length != 2 ||
      arguments[0] == undefined ||
      arguments[1] == undefined
    ) {
      throw new Error('Incorrect arguments!');
    }
    const output = [];
    const upCase = text.toUpperCase().split('');
    const upKey = key.toUpperCase().split('');
    let j = 0;
    for (let i = 0; i < upCase.length; i++) {
      let idx = this.alph.indexOf(upCase[i]);
      if (idx >= 0) {
        let idxKey = this.alph.indexOf(upKey[j % upKey.length]);
        let mescur = idx >= idxKey ? (idx - idxKey) % 26 : idx - idxKey + 26;
        output.push(this.alph[mescur]);
        j++;
      } else {
        output.push(upCase[i]);
      }
    }
    return this.type ? output.join('') : output.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
