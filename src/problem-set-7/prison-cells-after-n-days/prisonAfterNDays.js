/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, N) {
  let cycle = 0;
  const hash = {};

  for (let i = 0; i < N; i++) {
    const next = getNext(cells);
    const key = next.toString();

    if (hash[key]) {
      break;
    } else {
      hash[key] = true;
      cycle++;
      cells = next;
    }
  }

  if (cycle < N) {
    N %= cycle;

    for (let i = 0; i < N; i++) {
      cells = getNext(cells);
    }
  }

  return cells;
};

function getNext(cells) {
  const n = cells.length;
  const next = Array(n);
  next[0] = 0;
  next[n - 1] = 0;

  for (let i = 1; i < n - 1; i++) {
    next[i] = cells[i - 1] === cells[i + 1] ? 1 : 0;
  }

  return next;
}
