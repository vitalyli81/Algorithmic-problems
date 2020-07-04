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
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  let frontier = [root];

  while (frontier.length) {
    const next = [];

    for (let i = 0; i < frontier.length; i++) {
      const nextNode = frontier[i];

      if (i === frontier.length - 1) {
        res.push(nextNode.val);
      }

      if (nextNode.left) {
        next.push(nextNode.left);
      }

      if (nextNode.right) {
        next.push(nextNode.right);
      }
    }
    frontier = next;
  }

  return res;
};
