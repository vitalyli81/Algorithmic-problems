/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const stack = [];

  ops.forEach((op) => {
    if (op === '+') {
      const top = stack.pop();
      const newTop = top + stack[stack.length - 1];
      stack.push(top);
      stack.push(newTop);
    } else if (op === 'C') {
      stack.pop();
    } else if (op === 'D') {
      stack.push(2 * stack[stack.length - 1]);
    } else {
      stack.push(parseInt(op));
    }
  });

  return stack.reduce((acc, val) => acc + val, 0);
};
