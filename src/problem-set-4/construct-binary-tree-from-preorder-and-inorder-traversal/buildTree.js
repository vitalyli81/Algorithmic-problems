/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  function helper(p1, p2, i1, i2) {
    if (p1 > p2 || i1 > i2) return null;
    const rootVal = preorder[p1];
    const rootIndex = inorderHash[rootVal];
    const leftCount = rootIndex - i1;
    const root = new TreeNode(rootVal);
    root.left = helper(p1 + 1, p1 + leftCount, i1, rootIndex - 1);
    root.right = helper(p1 + leftCount + 1, p2, rootIndex + 1, i2);
    return root;
  }

  const inorderHash = {};
  inorder.forEach((val, i) => {
    inorderHash[val] = i;
  });

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
