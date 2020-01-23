/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if (!root) return 0;

  const pathsFromRoot = pathsFromNode(root, sum, 0);
  const pathsLeft = pathSum(root.left, sum);
  const pathsRight = pathSum(root.right, sum);

  return pathsFromRoot + pathsLeft + pathsRight;
};

const pathsFromNode = (node, target, curSum) => {
  if (!node) return 0;

  let totalPaths = 0;
  curSum += node.val;

  if (curSum === target) totalPaths++;

  totalPaths += pathsFromNode(node.left, target, curSum);
  totalPaths += pathsFromNode(node.right, target, curSum);

  return totalPaths;
};
