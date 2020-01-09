/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
  if (!root) return [];
  const result = [];
  let frontier = [root];

  while (frontier.length) {
    const next = [];
    const levelList = [];
    frontier.forEach(current => {
      levelList.push(current.val);
      if (current.left) next.push(current.left);
      if (current.right) next.push(current.right);
    });
    result.push(levelList);
    frontier = next;
  }

  return result;
};
