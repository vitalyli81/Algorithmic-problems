/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let sum = 0;
  const dfs = root => {
    if (root === null) return root;
    dfs(root.right);
    sum += root.val;
    root.val = sum;
    dfs(root.left);
    return root;
  };
  return dfs(root);
};
