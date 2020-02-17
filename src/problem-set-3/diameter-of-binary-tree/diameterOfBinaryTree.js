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
var diameterOfBinaryTree = function(root) {
  let maxDiameter = 0;
  const dfs = root => {
    if (root === null) return 0;
    const l = dfs(root.left);
    const r = dfs(root.left);
    maxDiameter = Math.max(maxDiameter, l + r + 1);
    return Math.max(l, r) + 1;
  };
  dfs(root);
  return maxDiameter;
};
