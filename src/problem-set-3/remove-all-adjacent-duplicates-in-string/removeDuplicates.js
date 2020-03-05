/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  const arr = S.split('');
  let res = '';
  const n = S.length;
  let i = 0;

  for (let j = 0; j < n; j++, i++) {
    arr[i] = arr[j];
    if (i > 0 && arr[i - 1] === arr[i]) {
      i -= 2;
    }
  }
  while (i-- > 0) {
    res = arr[i] + res;
  }
  return res;
};
