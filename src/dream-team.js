const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const newArr = [];
  if (Array.isArray(members) === true) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        newArr.push(members[i]);
      } else {
        continue;
      }
    }
    return newArr
      .map((el) => el.trim().slice(0, 1).toUpperCase())
      .sort()
      .join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam,
};
