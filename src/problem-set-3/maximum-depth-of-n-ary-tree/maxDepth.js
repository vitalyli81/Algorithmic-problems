/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return [];
  let level = 0;
  let frontier = [root];
  while (frontier.length) {
    let nextList = [];
    frontier.forEach(next => {
      next.children.forEach(child => {
        nextList.push(child);
      });
    });
    level++;
    frontier = nextList;
  }
  return level;
};
