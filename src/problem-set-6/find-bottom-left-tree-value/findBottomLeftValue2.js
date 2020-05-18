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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  const frontier = [root];
  let node;
  while (frontier.length) {
    node = frontier.shift();

    if (node.right) {
      frontier.push(node.right);
    }

    if (node.left) {
      frontier.push(node.left);
    }
  }

  return node.val;
};
