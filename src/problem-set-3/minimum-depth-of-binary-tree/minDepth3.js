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
var minDepth = function (root) {
  if (root === null) {
    return 0;
  }
  let frontier = [root];
  let level = 1;

  while (frontier.length) {
    let next = [];

    for (let node of frontier) {
      if (!node.left && !node.right) {
        return level;
      }
      if (node.left) {
        next.push(node.left);
      }

      if (node.right) {
        next.push(node.right);
      }
    }

    level += 1;
    frontier = next;
  }
};
