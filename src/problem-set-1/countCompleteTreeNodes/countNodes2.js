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
const countNodes = root => {
  if (!root) return 0;

  const frontier = [root];
  let count = 0;

  while (frontier.length) {
    const current = frontier.pop();
    count++;

    if (current.left) {
      frontier.push(current.left);
    }

    if (current.right) {
      frontier.push(current.right);
    }
  }

  return count;
};
