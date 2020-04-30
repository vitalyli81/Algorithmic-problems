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
var maxPathSum = function (root) {
  let max = -Infinity;
  const postorder = (node) => {
    if (!node) return 0;
    const left = Math.max(0, postorder(node.left));
    const right = Math.max(0, postorder(node.right));
    max = Math.max(max, left + right + node.val);
    return Math.max(left, right) + node.val;
  };

  postorder(root);

  return max;
};
