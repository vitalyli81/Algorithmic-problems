/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  const ans = {};
  traverse(root, p, q, ans);
  return ans.node;
};

function traverse(node, p, q, ans) {
  if (!node) return false;

  const left = traverse(node.left, p, q, ans) ? 1 : 0;
  const right = traverse(node.right, p, q, ans) ? 1 : 0;
  const mid = node === p || node === q ? 1 : 0;

  if (mid + left + right > 1) {
    ans.node = node;
  }

  return mid + left + right > 0;
}
