/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
  return helper(n, n);
};

function helper(n, m) {
  if (n === 0) return [''];
  if (n === 1) return ['1', '8', '0'];

  const list = helper(n - 2, m);
  const result = [];

  for (let i = 0; i < list.length; i++) {
    const c = list[i];

    if (n !== m) result.push(`0${c}0`);

    result.push(`1${c}1`);
    result.push(`8${c}8`);
    result.push(`6${c}9`);
    result.push(`9${c}6`);
  }

  return result;
}
