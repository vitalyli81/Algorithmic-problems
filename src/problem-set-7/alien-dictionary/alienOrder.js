/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  const indegree = {};
  const adjList = {};
  let res = '';
  const frontier = [];

  words.forEach((w) => {
    for (let c of w) {
      adjList[c] = [];
      indegree[c] = 0;
    }
  });

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];

    if (w1.length > w2.length && w1.startsWith(w2)) {
      return '';
    }

    for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
      const c1 = w1[j];
      const c2 = w2[j];

      if (c1 !== c2) {
        adjList[c1].push(c2);
        indegree[c2]++;
        break;
      }
    }
  }

  Object.entries(indegree).forEach(([v, count]) => {
    if (count === 0) {
      frontier.push(v);
    }
  });

  while (frontier.length) {
    const curNode = frontier.pop();
    res += curNode;

    adjList[curNode].forEach((next) => {
      indegree[next]--;
      if (indegree[next] === 0) {
        frontier.push(next);
      }
    });
  }

  if (res.length !== Object.keys(indegree).length) {
    return '';
  }

  return res;
};
