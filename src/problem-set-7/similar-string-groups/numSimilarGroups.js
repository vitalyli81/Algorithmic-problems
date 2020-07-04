/**
 * @param {string[]} A
 * @return {number}
 */
var numSimilarGroups = function (A) {
  if (A.length < 2) {
    return A.length;
  }

  const visited = {};
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (!visited[A[i]]) {
      visited[A[i]] = true;
      dfs(A, A[i], visited);
      count++;
    }
  }

  return count;
};

const dfs = (A, s, visited) => {
  for (let i = 0; i < A.length; i++) {
    if (!visited[A[i]]) {
      if (isSimilar(s, A[i])) {
        visited[A[i]] = true;
        dfs(A, A[i], visited);
      }
    }
  }
};

const isSimilar = (w1, w2) => {
  let count = 0;

  for (let i = 0; i < w1.length; i++) {
    if (w1[i] !== w2[i]) {
      count++;
    }

    if (count > 2) {
      return false;
    }
  }

  return true;
};
