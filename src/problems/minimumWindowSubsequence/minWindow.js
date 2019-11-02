/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var minWindow = function(S, T) {
  const sLen = S.length;
  const tLen = T.length;
  let sIdx = 0;
  let tIdx = 0;
  let minStrLen = Number.MAX_VALUE;
  let result = '';

  while (sIdx < sLen) {
    if (S[sIdx] === T[tIdx]) {
      tIdx++;

      if (tIdx === tLen) {
        let end = sIdx + 1;
        tIdx--;

        while (tIdx >= 0) {
          if (S[sIdx] === T[tIdx]) {
            tIdx--;
          }

          sIdx--;
        }

        sIdx++;
        tIdx = 0;

        if (end - sIdx < minStrLen) {
          minStrLen = end - sIdx;
          result = S.substring(sIdx, end);
        }
      }
    }

    sIdx++;
  }

  return result;
};
