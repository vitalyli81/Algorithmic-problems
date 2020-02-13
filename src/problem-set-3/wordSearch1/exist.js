/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (!board || !board.length || !word) return false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(board, word, i, j, 0)) return true;
    }
  }

  return false;
};

const dfs = (board, word, i, j, idx) => {
  if (
    i < 0 ||
    j < 0 ||
    i >= board.length ||
    j >= board[0].length ||
    board[i][j] !== word[idx]
  ) {
    return false;
  }

  if (idx === word.length - 1) {
    return true;
  }

  const char = board[i][j];
  board[i][j] = '#';
  const result =
    dfs(board, word, i + 1, j, idx + 1) ||
    dfs(board, word, i - 1, j, idx + 1) ||
    dfs(board, word, i, j + 1, idx + 1) ||
    dfs(board, word, i, j - 1, idx + 1);
  board[i][j] = char;

  return result;
};
