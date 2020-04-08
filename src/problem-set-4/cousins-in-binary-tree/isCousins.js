/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  const depthHash = {};
  const parentHash = {};
  dfs(root, null, depthHash, parentHash);
  return depthHash[x] === depthHash[y] && parentHash[x] !== parentHash[y];
};

function dfs(node, parent, depthHash, parentHash) {
  if (!node) return null;

  depthHash[node.val] = parent === null ? 0 : 1 + depthHash[parent.val];
  parentHash[node.val] = parent;
  dfs(node.left, node, depthHash, parentHash);
  dfs(node.right, node, depthHash, parentHash);
}
