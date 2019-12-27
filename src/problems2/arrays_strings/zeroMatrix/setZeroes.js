export const setZeroes = matrix => {
  const n = matrix.length;
  if (!n || !matrix[0].length) return;
  const m = matrix[0].length;
  const rowHash = {};
  const colHash = {};

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        rowHash[i] = 1;
        colHash[j] = 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (rowHash[i] || colHash[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};
