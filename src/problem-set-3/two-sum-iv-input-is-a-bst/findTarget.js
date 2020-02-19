/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const hash = {};
  return dfs(root, k, hash);
};
const dfs = (root, k, hash) => {
  if (!root) return false;
  if (hash[k - root.val]) return true;
  hash[root.val] = 1;

  const left = dfs(root.left, k, hash);
  const right = dfs(root.right, k, hash);
  return left || right;
};
