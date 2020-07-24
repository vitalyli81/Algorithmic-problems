/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const graph = buildGraph(wordList);
  const distance = bfs(beginWord, endWord, graph);
  const res = [];

  dfs(beginWord, endWord, graph, distance, res, []);

  return res;
};

const bfs = (beginWord, endWord, graph) => {
  let front = [beginWord];
  const distance = { [beginWord]: 1 };

  while (front.length) {
    const next = [];
    let found = false;
    for (let cur of front) {
      const level = distance[cur];
      for (let i = 0; i < cur.length; i++) {
        const newWord = cur.substring(0, i) + '*' + cur.substring(i + 1);
        const adj = graph[newWord];
        if (adj) {
          for (let adjW of adj) {
            if (adjW === endWord) {
              found = true;
            }
            if (!distance[adjW]) {
              next.push(adjW);
              distance[adjW] = level + 1;
            }
          }
        }
      }
      if (found) break;
    }
    front = next;
  }

  return distance;
};

const dfs = (curWord, endWord, graph, distance, res, temp) => {
  temp.push(curWord);

  if (curWord === endWord) {
    res.push([...temp]);
  } else {
    for (let i = 0; i < curWord.length; i++) {
      const newWord = curWord.substring(0, i) + '*' + curWord.substring(i + 1);
      const adj = graph[newWord];

      if (!adj) continue;

      for (let next of adj) {
        if (distance[next] === distance[curWord] + 1) {
          dfs(next, endWord, graph, distance, res, temp);
        }
      }
    }
  }

  temp.pop(temp.length - 1);
};

const buildGraph = (wordList) => {
  const graph = {};

  wordList.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      const newWord = word.substring(0, i) + '*' + word.substring(i + 1);
      graph[newWord] = graph[newWord] || [];
      graph[newWord].push(word);
    }
  });

  return graph;
};
