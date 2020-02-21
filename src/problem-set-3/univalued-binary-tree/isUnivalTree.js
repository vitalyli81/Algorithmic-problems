/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  const frontier = [root];
  while (frontier.length) {
    const cur = frontier.pop();
    if (cur.left) {
      if (cur.val !== cur.left.val) return false;
      frontier.push(cur.left);
    }
    if (cur.right) {
      if (cur.val !== cur.right.val) return false;
      frontier.push(cur.right);
    }
  }
  return true;
};
