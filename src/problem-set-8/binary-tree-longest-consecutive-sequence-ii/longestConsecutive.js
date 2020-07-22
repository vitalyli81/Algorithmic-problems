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
var longestConsecutive = function (root) {
  let max = 0;
  const dfs = (root) => {
    if (root === null) return [0, 0];

    let asc = 1;
    let desc = 1;

    if (root.left !== null) {
      const l = dfs(root.left);

      if (root.val === root.left.val + 1) {
        desc = Math.max(desc, l[1] + 1);
      } else if (root.val === root.left.val - 1) {
        asc = Math.max(asc, l[0] + 1);
      }
    }

    if (root.right !== null) {
      const r = dfs(root.right);

      if (root.val === root.right.val + 1) {
        desc = Math.max(desc, r[1] + 1);
      } else if (root.val === root.right.val - 1) {
        asc = Math.max(asc, r[0] + 1);
      }
    }

    max = Math.max(max, asc + desc - 1);

    return [asc, desc];
  };

  dfs(root);

  return max;
};
