/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  let res = 0;
  const getPath = node => {
    if (node === null) {
      return 0;
    }
    const left = getPath(node.left);
    const right = getPath(node.right);
    let leftCount = 0;
    let rightCount = 0;
    if (node.left !== null && node.left.val === node.val) {
      leftCount += left + 1;
    }
    if (node.right !== null && node.right.val === node.val) {
      rightCount += right + 1;
    }

    res = Math.max(res, leftCount + rightCount);
    return Math.max(rightCount, leftCount);
  };
  getPath(root);
  return res;
};
