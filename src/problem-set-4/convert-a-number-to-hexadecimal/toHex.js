/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  const hex = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];
  let res = '';

  if (num === 0) return '0';

  if (num < 0) {
    num += 2 ** 32;
  }

  while (num > 0) {
    res = hex[num % 16] + res;
    num = Math.trunc(num / 16);
  }

  return res;
};
