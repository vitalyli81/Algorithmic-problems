/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];
  inorder(root, res);
  return res;
};

const inorder = (node, res) => {
  if (!node) return;
  inorder(node.left, res);
  res.push(node.val);
  inorder(node.right, res);
};
