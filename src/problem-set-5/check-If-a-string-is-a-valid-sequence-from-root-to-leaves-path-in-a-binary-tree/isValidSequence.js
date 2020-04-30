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
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function (root, arr, i = 0) {
  if (!root) {
    return arr.length === 0;
  }

  if (
    i === arr.length - 1 &&
    arr[i] === root.val &&
    !root.left &&
    !root.right
  ) {
    return true;
  }

  return (
    i < arr.length &&
    arr[i] === root.val &&
    (isValidSequence(root.left, arr, i + 1) ||
      isValidSequence(root.right, arr, i + 1))
  );
};
