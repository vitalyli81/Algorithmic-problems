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
var levelOrderBottom = function(root) {
  if (!root) return [];
  const result = [];
  let frontier = [root];
  while (frontier.length) {
    let nextList = [];
    frontier.forEach(next => {
      if (next && next.left) {
        nextList.push(next.left);
      }
      if (next && next.right) {
        nextList.push(next.right);
      }
    });
    result.push(frontier.map(node => node && node.val));
    frontier = nextList;
  }
  result.reverse();
  return result;
};
