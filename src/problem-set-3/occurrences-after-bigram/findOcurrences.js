/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  const arr = text.split(' ');
  const res = [];
  for (let i = 2; i < arr.length; i++) {
    if (first === arr[i - 2] && second === arr[i - 1]) {
      res.push(arr[i]);
    }
  }
  return res;
};
