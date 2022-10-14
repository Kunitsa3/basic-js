const {
  NotImplementedError
} = require('../extensions/index.js');

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
  const DNS = domains.map(element => {
    const DNSParts = element.split('.').reverse();
    return DNSParts.reduce((acc, curr) => {
      return acc.length ? [...acc, `${acc[acc.length -1]}.${curr}`] : ['.'+curr]; 
    }, [])
  })
  const flatDNS = DNS.flat();
  return flatDNS.reduce((acc, curr) => {
    return acc[curr] ? {...acc, [curr]: acc[curr] + 1} : {...acc, [curr] : 1}
  }, {})
}

module.exports = {
  getDNSStats
};