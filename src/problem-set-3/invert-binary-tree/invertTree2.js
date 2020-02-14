/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) {
    return null;
  }
  const frontier = [root];

  while (frontier.length) {
    const current = frontier.pop();
    const tmp = current.left;
    current.left = current.right;
    current.right = tmp;
    if (current.left) {
      frontier.push(current.left);
    }
    if (current.right) {
      frontier.push(current.right);
    }
  }

  return root;
};
