/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let low = 0;
  let high = S.length;
  const ans = Array(S.length + 1);
  for (let i = 0; i < S.length; i++) {
    if (S[i] === 'D') {
      ans[i] = high--;
    } else {
      ans[i] = low++;
    }
  }
  ans[S.length] = low;
  return ans;
};
