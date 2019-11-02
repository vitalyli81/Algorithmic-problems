var minDominoRotations = function(A, B) {
  if (!A.length) return -1;
  const countA = Array(7).fill(0);
  const countB = Array(7).fill(0);
  const countSame = Array(7).fill(0);

  for (let i = 0; i < A.length; i++) {
    const aVal = A[i];
    const bVal = B[i];

    countA[aVal] = (countA[aVal] || 0) + 1;
    countB[bVal] = (countB[bVal] || 0) + 1;

    if (aVal === bVal) {
      countSame[aVal] = countSame[aVal] + 1;
    }
  }

  for (let i = 1; i < 7; i++) {
    if (countA[i] + countB[i] - countSame[i] >= A.length) {
      return Math.min(countA[i], countB[i]) - countSame[i];
    }
  }

  return -1;
};
