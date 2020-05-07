/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let removed = 0;
  const stack = [];

  for (let n of num) {
    while (stack.length && n < stack[stack.length - 1] && removed < k) {
      stack.pop();
      removed++;
    }
    stack.push(n);
  }

  while (removed < k) {
    stack.pop();
    removed++;
  }

  while (stack.length && stack[0] === '0') {
    stack.shift();
  }

  return stack.length ? stack.join('') : '0';
};
