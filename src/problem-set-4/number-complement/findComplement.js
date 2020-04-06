/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let complement = '';

  for (let c of num.toString(2)) {
    complement += c === '0' ? '1' : '0';
  }

  return parseInt(complement, 2);
};
