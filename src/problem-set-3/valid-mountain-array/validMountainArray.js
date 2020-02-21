/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  if (A.length < 3 || A[0] >= A[1]) return false;
  let l = 1;
  while (l < A.length) {
    if (A[l] === A[l - 1]) {
      return false;
    }
    if (A[l] < A[l - 1]) {
      l++;
      break;
    }
    l++;
  }
  if (l === A.length && A[l - 1] >= A[l - 2]) return false;
  while (l < A.length) {
    if (A[l] >= A[l - 1]) {
      return false;
    }
    l++;
  }

  return true;
};
