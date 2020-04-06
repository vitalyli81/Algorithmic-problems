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
  const inorder = (root) => {
    if (!root) return null;
    inorder(root.left);
    checkValue(root.val);
    inorder(root.right);
  };

  const checkValue = (val) => {
    if (val !== curVal) {
      curVal = val;
      curCount = 0;
    }
    curCount++;
    if (curCount > maxCount) {
      modes = [curVal];
      maxCount = curCount;
    } else if (curCount === maxCount) {
      modes.push(curVal);
    }
  };

  let curVal;
  let curCount = 0;
  let maxCount = 0;
  let modes = [];

  inorder(root);

  return modes;
};
