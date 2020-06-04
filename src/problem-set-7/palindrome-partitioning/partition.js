/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = [];
  const cur = [];

  helper(s, 0, res, cur);

  return res;
};

function helper(s, l, res, cur) {
  if (l >= s.length) {
    res.push([...cur]);
    return;
  }

  for (let i = l; i < s.length; i++) {
    if (isPalindrome(s, l, i)) {
      if (i === l) {
        cur.push(s[i]);
      } else {
        cur.push(s.substring(l, i + 1));
      }

      helper(s, i + 1, res, cur);
      cur.pop();
    }
  }
}

function isPalindrome(s, i, j) {
  if (i === j) {
    return true;
  }

  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}
