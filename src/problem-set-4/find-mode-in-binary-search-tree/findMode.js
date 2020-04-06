/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  const hash = {};
  let max = 0;
  const modes = [];
  helper(root, hash);
  for (let [key, value] of Object.entries(hash)) {
    max = Math.max(max, value);
  }

  for (let [key, value] of Object.entries(hash)) {
    if (max === value) {
      modes.push(key);
    }
  }

  return modes;
};

function helper(root, hash) {
  if (!root) return null;
  hash[root.val] = (hash[root.val] || 0) + 1;
  helper(root.left, hash);
  helper(root.right, hash);
}
