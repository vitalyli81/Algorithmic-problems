/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let res = '';
  let count = 0;
  let sLtoR = '';

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c === '(') {
      count++;
    } else if (c === ')') {
      if (count === 0) {
        continue;
      } else {
        count--;
      }
    }
    sLtoR += c;
  }

  if (count > 0) {
    count = 0;
    for (let i = sLtoR.length - 1; i >= 0; i--) {
      const c = sLtoR[i];

      if (c === ')') {
        count++;
      } else if (c === '(') {
        if (count === 0) {
          continue;
        } else {
          count--;
        }
      }

      res = c + res;
    }
  } else {
    res = sLtoR;
  }

  return res;
};
