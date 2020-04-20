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
var bstFromPreorder = function (preorder, i = 0, j = preorder.length - 1) {
  if (i > j) return null;
  const root = new TreeNode(preorder[i]);
  if (i === j) {
    return root;
  }

  let right;
  for (right = i + 1; right <= j; right++) {
    if (preorder[right] > preorder[i]) {
      break;
    }
  }

  root.left = bstFromPreorder(preorder, i + 1, right - 1);
  root.right = bstFromPreorder(preorder, right, j);

  return root;
};
