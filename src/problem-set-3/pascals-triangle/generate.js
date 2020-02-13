/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (!numRows) return [];
  const result = [[1]];
  for (let i = 1; i < numRows; i++) {
    const prevLevel = result[result.length - 1];
    const nextLevel = Array(i + 1);
    nextLevel[0] = 1;
    nextLevel[i] = 1;
    for (let j = 1; j < i; j++) {
      nextLevel[j] = prevLevel[j] + prevLevel[j - 1];
    }
    result.push(nextLevel);
  }
  return result;
};
