export const sortStack = stack => {
  const stack2 = [];

  while (stack.length) {
    const tmp = stack.pop();

    while (stack2.length && stack2[stack2.length - 1] < tmp) {
      stack.push(stack2.pop());
    }

    stack2.push(tmp);
  }
  while (stack2.length) {
    stack.push(stack2.pop());
  }
  return stack;
};
