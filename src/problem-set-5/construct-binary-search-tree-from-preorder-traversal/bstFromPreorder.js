/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  if (!preorder.length) return null;
  const [root, ...rest] = preorder;
  const rootNode = new TreeNode(root);
  rootNode.left = bstFromPreorder(rest.filter((v) => v < root));
  rootNode.right = bstFromPreorder(rest.filter((v) => v > root));
  return rootNode;
};
