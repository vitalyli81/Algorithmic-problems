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
  let prevVal = { val: null };
  return checkBst(root, prevVal);
};

function checkBst(node, prevVal) {
  if (!node) return true;

  if (!checkBst(node.left, prevVal)) return false;
  if (prevVal.val !== null && prevVal.val >= node.val) return false;
  prevVal.val = node.val;
  if (!checkBst(node.right, prevVal)) return false;
  return true;
}
