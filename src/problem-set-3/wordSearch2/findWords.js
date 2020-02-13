/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  if (!board || !board.length || !words || !words.length) return [];

  const result = [];
  const root = buildTrie(words);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(board, root, i, j, result);
    }
  }

  return result;
};

const buildTrie = words => {
  const root = {};
  words.forEach(word => {
    let node = root;
    for (let char of word) {
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node.word = word;
  });
  return root;
};

const dfs = (board, node, i, j, result) => {
  if (node.word) {
    result.push(node.word);
    node.word = null;
  }

  if (
    i < 0 ||
    j < 0 ||
    i >= board.length ||
    j >= board[0].length ||
    !node[board[i][j]]
  ) {
    return;
  }

  const char = board[i][j];
  board[i][j] = '#';
  dfs(board, node[char], i + 1, j, result);
  dfs(board, node[char], i - 1, j, result);
  dfs(board, node[char], i, j + 1, result);
  dfs(board, node[char], i, j - 1, result);
  board[i][j] = char;
};
