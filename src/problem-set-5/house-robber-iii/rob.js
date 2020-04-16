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
var rob = function (root) {
  return Math.max(dfs(root, true), dfs(root, false));
};

function dfs(root, include) {
  if (!root) return 0;
  if (include) {
    return dfs(root.left, !include) + dfs(root.right, !include) + root.val;
  } else {
    const left = Math.max(dfs(root.left, true), dfs(root.left, false));
    const right = Math.max(dfs(root.right, true), dfs(root.right, false));

    return left + right;
  }
}
