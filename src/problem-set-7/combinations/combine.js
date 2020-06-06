/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];

  setCombs(res, [], 1, n, k);

  return res;
};

function setCombs(res, cur, start, n, k) {
  if (k === 0) {
    res.push([...cur]);
    return;
  }

  for (let i = start; i <= n; i++) {
    cur.push(i);
    setCombs(res, cur, start + 1, n, k - 1);
    cur.pop();
  }
}
