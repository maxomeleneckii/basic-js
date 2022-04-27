const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  for (let i = 0; i < domains.length; i++) {
    const domainEl = domains[i].split('.');
    for (let k = 0; k < domainEl.length; k++) {
      const key = '.' + domainEl.slice(k).reverse().join('.');
      if (obj.hasOwnProperty(key)) {
        obj[key] += 1;
      } else {
        obj[key] = 1;
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
