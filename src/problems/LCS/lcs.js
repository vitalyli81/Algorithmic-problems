/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
export const longestCommonSubsequence = (text1, text2) => {
  const len1 = text1.length + 1;
  const len2 = text2.length + 1;
  let maxLength = 0;
  const memoGrid = Array(len1);

  for (let row = 0; row < len1; row++) {
    memoGrid[row] = Array(len2);
    memoGrid[row][0] = 0;
  }

  for (let col = 1; col < len2; col++) {
    memoGrid[0][col] = 0;
  }

  for (let row = 1; row < len1; row++) {
    for (let col = 1; col < len2; col++) {
      if (text1[row - 1] === text2[col - 1]) {
        memoGrid[row][col] = memoGrid[row - 1][col - 1] + 1;
        maxLength = Math.max(memoGrid[row][col], maxLength);
      } else {
        memoGrid[row][col] = Math.max(
          memoGrid[row - 1][col],
          memoGrid[row][col - 1]
        );
      }
    }
  }

  return maxLength;
};

export default longestCommonSubsequence;
