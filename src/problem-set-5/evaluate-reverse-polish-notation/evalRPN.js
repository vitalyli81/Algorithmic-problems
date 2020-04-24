/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (let t of tokens) {
    if (t === '+') {
      stack.push(stack.pop() + stack.pop());
    } else if (t === '-') {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a - b);
    } else if (t === '*') {
      stack.push(stack.pop() * stack.pop());
    } else if (t === '/') {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(Math.trunc(a / b));
    } else {
      stack.push(parseInt(t));
    }
  }
  console.log(stack);
  return stack.pop();
};
