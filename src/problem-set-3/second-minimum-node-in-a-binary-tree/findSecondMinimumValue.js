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
var findSecondMinimumValue = function(root) {
  const frontier = [root];
  let min1 = Infinity;
  let min2 = Infinity;

  while (frontier.length) {
    const next = frontier.pop();
    if (next.val !== min1 && next.val !== min2) {
      if (next.val < min1) {
        [min1, min2] = [next.val, min1];
      } else if (next.val > min2) {
        min2 = next.val;
      }
    }
    if (next.left) {
      frontier.push(next.left);
    }
    if (next.right) {
      frontier.push(next.right);
    }
  }

  return min2 === Infinity ? -1 : min2;
};
