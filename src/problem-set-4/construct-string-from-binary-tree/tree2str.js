/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
  if (!t) return '';
  let str = `${t.val}`;
  let left = tree2str(t.left);
  let right = tree2str(t.right);

  left = left || right ? `(${left})` : '';
  right = right || left ? `(${right})` : '';

  return str + left + right;
};
