var minDominoRotations = function(A, B) {
  const n = A.length;
  if (!n) return -1;
  let aCount = 0;
  let bCount = 0;

  for (i = 0; i < n && (A[0] === A[i] || A[0] === B[i]); i++) {
    if (A[0] !== A[i]) aCount++;
    if (A[0] !== B[i]) bCount++;
    if (i === n - 1) return Math.min(aCount, bCount);
  }

  aCount = 0;
  bCount = 0;

  for (let i = 0; i < n && (B[0] === A[i] || B[0] === B[i]); i++) {
    if (B[0] !== A[i]) aCount++;
    if (B[0] !== B[i]) bCount++;

    if (i === n - 1) return Math.min(aCount, bCount);
  }

  return -1;
};
