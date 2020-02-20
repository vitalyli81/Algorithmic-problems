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
var minDiffInBST = function(root) {
  let min = Infinity;
  const data = [];
  const dfs = node => {
    if (!node) {
      return;
    }
    dfs(node.left);
    data.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  for (let i = 1; i < data.length; i++) {
    min = Math.min(data[i] - data[i - 1], min);
  }
  return min;
};
