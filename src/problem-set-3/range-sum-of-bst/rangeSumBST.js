/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  let sum = 0;
  const frontier = [root];

  while (frontier.length) {
    const cur = frontier.pop();
    if (cur.val >= L && cur.val <= R) {
      sum += cur.val;
    }
    if (cur.left) {
      frontier.push(cur.left);
    }
    if (cur.right) {
      frontier.push(cur.right);
    }
  }

  return sum;
};
