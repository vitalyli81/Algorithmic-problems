/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return checkBst(root, null, null);
};

function checkBst(node, min, max) {
  if (!node) return true;
  if ((min !== null && min >= node.val) || (max !== null && max <= node.val)) {
    return false;
  }
  if (
    !checkBst(node.left, min, node.val) ||
    !checkBst(node.right, node.val, max)
  ) {
    return false;
  }

  return true;
}
