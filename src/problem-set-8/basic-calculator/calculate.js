/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let res = 0;
  let num = 0;
  let sign = 1;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c >= '0' && c <= '9') {
      num = num * 10 + Number(c);
    } else if (c === '+') {
      res += sign * num;
      sign = 1;
      num = 0;
    } else if (c === '-') {
      res += sign * num;
      sign = -1;
      num = 0;
    } else if (c === '(') {
      stack.push(res);
      stack.push(sign);
      sign = 1;
      res = 0;
    } else if (c === ')') {
      res += sign * num;
      num = 0;
      res *= stack.pop();
      res += stack.pop();
    }
  }

  if (num !== 0) {
    res += sign * num;
  }

  return res;
};
