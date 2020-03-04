/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function(num) {
  let max = '';
  let s = String(num);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '6') {
      max += '6' + s.substring(i + 1);
      return Number(max);
    } else {
      max += s[i];
    }
  }

  return Number(max);
};

var maximum69Number = function(num) {
  let add = 0;
  let step = 1;
  let temp = num;

  while (temp > 0) {
    const digit = temp % 10;
    temp = Math.trunc(temp / 10);
    if (digit === 6) {
      add = step * 3;
    }
    step *= 10;
  }

  return num + add;
};
