/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
  let complement = '';

  for (let c of N.toString(2)) {
    complement += c === '0' ? '1' : '0';
  }

  return parseInt(complement, 2);
};
