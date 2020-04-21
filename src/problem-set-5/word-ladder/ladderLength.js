/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const edges = {};
  const visited = { [beginWord]: 1 };
  let queue = [beginWord];

  for (let word of wordList) {
    for (let i = 0; i < word.length; i++) {
      const newWord = `${word.substring(0, i)}*${word.substring(i + 1)}`;
      edges[newWord] = edges[newWord] || [];
      edges[newWord].push(word);
    }
  }

  while (queue.length) {
    let next = [];

    for (let cur of queue) {
      const level = visited[cur];

      for (let i = 0; i < cur.length; i++) {
        const newWord = `${cur.substring(0, i)}*${cur.substring(i + 1)}`;
        const adjWords = edges[newWord];

        if (adjWords) {
          for (let adjW of adjWords) {
            if (adjW === endWord) {
              return level + 1;
            }

            if (!visited[adjW]) {
              next.push(adjW);
              visited[adjW] = level + 1;
            }
          }
        }
      }
    }

    queue = next;
  }

  return 0;
};
