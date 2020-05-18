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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];
  let frontier = [root];
  const res = [];

  while (frontier.length) {
    let next = [];
    let max = -Infinity;

    for (let node of frontier) {
      max = Math.max(max, node.val);

      if (node.left) {
        next.push(node.left);
      }

      if (node.right) {
        next.push(node.right);
      }
    }
    res.push(max);
    frontier = next;
  }

  return res;
};
