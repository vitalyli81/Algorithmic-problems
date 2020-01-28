/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];
  generate(result, 0, 0, '', n);
  return result;
};

const generate = (result, open, close, str, max) => {
  if (str.length === 2 * max) {
    result.push(str);
  }

  if (open < max) {
    generate(result, open + 1, close, str + '(', max);
  }
  if (close < open) {
    generate(result, open, close + 1, str + ')', max);
  }
};
