export const rotate1 = matrix => {
  const n = matrix.length;
  if (!n || !matrix[0].length) return;

  reverseMatrix(matrix);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < matrix[0].length; j++) {
      swap(matrix, { i1: i, j1: j }, { i2: j, j2: i });
    }
  }
};

const reverseMatrix = matrix => {
  const n = matrix.length;
  if (!n || !matrix[0].length) return;

  for (let i = 0; i < Math.round(n / 2); i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      swap(matrix, { i1: i, j1: j }, { i2: n - 1 - i, j2: j });
    }
  }
};

const swap = (matrix, { i1, j1 }, { i2, j2 }) => {
  const temp = matrix[i1][j1];
  matrix[i1][j1] = matrix[i2][j2];
  matrix[i2][j2] = temp;
};
