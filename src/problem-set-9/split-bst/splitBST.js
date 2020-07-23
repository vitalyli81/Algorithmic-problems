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
 * @param {number} V
 * @return {TreeNode[]}
 */
var splitBST = function (root, V) {
  if (root === null) return [null, null];

  if (root.val <= V) {
    const res = splitBST(root.right, V);
    root.right = res[0];
    res[0] = root;

    return res;
  } else {
    const res = splitBST(root.left, V);
    root.left = res[1];
    res[1] = root;
    return res;
  }
};
