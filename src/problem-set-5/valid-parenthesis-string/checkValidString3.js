/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s, balance = 0) {
  for (let i = 0; i < s.length; i++) {
    if (balance < 0) return false;
    const c = s[i];
    if (c === '(') {
      balance++;
      continue;
    }

    if (c === ')') {
      balance--;
      continue;
    }

    const next = s.slice(i + 1);

    return (
      checkValidString(next, balance) ||
      checkValidString(next, balance + 1) ||
      checkValidString(next, balance - 1)
    );
  }

  return balance === 0;
};
