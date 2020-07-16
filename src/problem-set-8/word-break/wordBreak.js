/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const front = [0];
  const visited = {};
  const dict = {};

  wordDict.forEach((w) => {
    dict[w] = true;
  });

  while (front.length) {
    const start = front.pop();

    if (!visited[start]) {
      for (let end = start + 1; end <= s.length; end++) {
        if (dict[s.slice(start, end)]) {
          if (end === s.length) {
            return true;
          }

          front.push(end);
        }
      }

      visited[start] = true;
    }
  }

  return false;
};
