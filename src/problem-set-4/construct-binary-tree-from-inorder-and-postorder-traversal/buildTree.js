/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (
    inorder == null ||
    postorder == null ||
    inorder.length != postorder.length
  ) {
    return null;
  }
  function helper(i1, i2, p1, p2) {
    if (p1 > p2 || i1 > i2) return null;
    const rootVal = postorder[p2];
    const rootIndex = inorderHash[rootVal];
    const leftCount = rootIndex - i1;
    const root = new TreeNode(rootVal);

    root.left = helper(i1, rootIndex - 1, p1, p1 + leftCount - 1);
    root.right = helper(rootIndex + 1, i2, p1 + leftCount, p2 - 1);
    return root;
  }
  const inorderHash = {};
  inorder.forEach((val, i) => {
    inorderHash[val] = i;
  });

  return helper(0, inorder.length - 1, 0, postorder.length - 1);
};
