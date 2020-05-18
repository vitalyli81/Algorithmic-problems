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
  let high = 0;
  let left = root.val;

  function preorder(node, depth) {
    if (!node) return;
    if (high < depth) {
      high = depth;
      left = node.val;
    }

    preorder(node.left, depth + 1);
    preorder(node.right, depth + 1);
  }

  preorder(root, 0);

  return left;
};
