/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  const inorder = (node, prefix) => {
    if (!node) return;
    if (!node.left && !node.right) {
      sum += parseInt(prefix + node.val, 2);
    }
    inorder(node.left, prefix + node.val);
    inorder(node.right, prefix + node.val);
  };
  let sum = 0;
  inorder(root, '');

  return sum;
};
