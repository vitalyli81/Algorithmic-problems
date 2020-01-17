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
  const sortedList = [];
  copyBst(root, sortedList);
  for (let i = 1; i < sortedList.length; i++) {
    if (sortedList[i - 1] >= sortedList[i]) return false;
  }

  return true;
};

function copyBst(root, list) {
  if (!root) return null;
  copyBst(root.left, list);
  list.push(root.val);
  copyBst(root.right, list);
}
