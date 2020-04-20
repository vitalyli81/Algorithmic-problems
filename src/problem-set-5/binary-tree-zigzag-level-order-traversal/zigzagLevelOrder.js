/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const res = [];
  inorder(root, 0, res);
  res.forEach((v, i) => {
    if (i % 2 !== 0) {
      v.reverse();
    }
  });
  return res;
};

function inorder(node, level, res) {
  if (!node) return null;
  res[level] = res[level] || [];
  res[level].push(node.val);
  inorder(node.left, level + 1, res);
  inorder(node.right, level + 1, res);
}
