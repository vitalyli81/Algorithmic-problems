export const setZeroes2 = matrix => {
  const n = matrix.length;
  if (!n || !matrix[0].length) return;
  const m = matrix[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][j] = 'x';
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 'x') {
        matrix[i][j] = 0;
        updateCells(matrix, i, j);
      }
    }
  }
};

const updateCells = (matrix, row, col) => {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][col] !== 'x') {
      matrix[i][col] = 0;
    }
  }

  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[row][i] !== 'x') {
      matrix[row][i] = 0;
    }
  }
};
