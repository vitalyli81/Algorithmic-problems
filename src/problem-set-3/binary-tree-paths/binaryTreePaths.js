/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const result = [];
  dfs(root, result, '');
  return result;
};

function dfs(root, result, prev) {
  if (!root) {
    return;
  }
  if (!root.left && !root.right) {
    result.push(prev + root.val);
  }
  dfs(root.left, result, `${prev}${root.val}->`);
  dfs(root.right, result, `${prev}${root.val}->`);
}
