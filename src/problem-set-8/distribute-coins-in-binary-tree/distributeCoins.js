/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function (root) {
  let res = 0;
  const dfs = (node) => {
    if (node === null) return 0;

    const l = dfs(node.left);
    const r = dfs(node.right);
    res += Math.abs(l) + Math.abs(r);
    return node.val + l + r - 1;
  };

  dfs(root);

  return res;
};
