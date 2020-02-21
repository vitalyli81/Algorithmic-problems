/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  const res = S.split('');
  let left = 0;
  let right = S.length - 1;

  while (left < right) {
    if (!isLetter(S[left].charCodeAt())) {
      left++;
    } else if (!isLetter(S[right].charCodeAt())) {
      right--;
    } else {
      swap(res, left, right);
      left++;
      right--;
    }
  }

  return res.join('');
};

const isLetter = c => {
  return (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
};

const swap = (array, a, b) => {
  let t = array[a];
  array[a] = array[b];
  array[b] = t;
};
