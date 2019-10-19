class NumMatrix {
  constructor(matrix) {
    if (!matrix.length || !matrix[0].length) return;
    this.matrix = matrix;
    this.dp = Array(matrix.length + 1);

    for (let i = 0; i < this.dp.length; i++) {
      this.dp[i] = Array(matrix[0].length + 1).fill(0);
    }

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        this.dp[i + 1][j + 1] =
          this.dp[i][j + 1] + this.dp[i + 1][j] + matrix[i][j] - this.dp[i][j];
      }
    }
  }

  sumRegion(row1, col1, row2, col2) {
    return (
      this.dp[row2 + 1][col2 + 1] -
      this.dp[row1][col2 + 1] -
      this.dp[row2 + 1][col1] +
      this.dp[row1][col1]
    );
  }
}
