export const move = (n, source, target, aux) => {
  if (n > 0) {
    move(n - 1, source, aux, target);
    target.push(source.pop());
    move(n - 1, aux, target, source);
  }
};
