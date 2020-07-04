/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function (root) {
  const frontier = [[root, 0]];
  const colHash = {};

  while (frontier.length) {
    const [node, col] = frontier.shift();

    if (node === null) {
      continue;
    }

    if (colHash[col] === undefined) {
      colHash[col] = [];
    }

    colHash[col].push(node.val);

    frontier.push([node.left, col - 1]);
    frontier.push([node.right, col + 1]);
  }

  const sorted = Object.keys(colHash).sort((a, b) => a - b);
  return sorted.map((col) => colHash[col]);
};
