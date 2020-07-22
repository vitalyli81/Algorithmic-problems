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
var largestBSTSubtree = function (root) {
  let max = 0;
  const dfs = (node) => {
    if (node === null) return [0, Infinity, -Infinity];

    const [ls, lmin, lmax] = dfs(node.left);
    const [rs, rmin, rmax] = dfs(node.right);

    if (ls >= 0 && rs >= 0 && node.val > lmax && node.val < rmin) {
      max = Math.max(max, ls + rs + 1);
      return [ls + rs + 1, Math.min(node.val, lmin), Math.max(node.val, rmax)];
    }

    return [-1, 0, 0];
  };

  dfs(root);

  return max;
};
