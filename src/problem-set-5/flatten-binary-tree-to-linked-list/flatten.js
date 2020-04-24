flatten;
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let prev = null;
  function postorder(node) {
    if (!node) return null;
    postorder(node.right);
    postorder(node.left);
    node.right = prev;
    node.left = null;
    prev = node;
  }

  postorder(root);
};
