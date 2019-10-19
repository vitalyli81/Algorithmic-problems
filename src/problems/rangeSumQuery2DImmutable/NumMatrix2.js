class NumMatrix {
  constructor(matrix) {
    if (!matrix.length || !matrix[0].length) return;
    this.matrix = matrix;
    this.dp = Array(matrix.length);

    for (let i = 0; i < this.dp.length; i++) {
      this.dp[i] = Array(matrix[0].length).fill(0);
    }

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        this.dp[i][j + 1] = this.dp[i][j] + matrix[i][j];
      }
    }
  }

  sumRegion(row1, col1, row2, col2) {
    let sum = 0;

    for (let i = row1; i <= row2; i++) {
      sum += this.dp[i][col2 + 1] - this.dp[i][col1];
    }

    return sum;
  }
}
