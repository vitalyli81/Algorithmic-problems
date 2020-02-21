/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let dir = '';
  for (let i = 1; i < A.length; i++) {
    if (A[i] > A[i - 1]) {
      if (dir === 'desc') {
        return false;
      }
      if (!dir) {
        dir = 'asc';
      }
    } else if (A[i] < A[i - 1]) {
      if (dir === 'asc') {
        return false;
      }
      if (!dir) {
        dir = 'desc';
      }
    }
  }

  return true;
};
