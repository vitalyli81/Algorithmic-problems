/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let res = [];
  let frontier = [root];

  while (frontier.length) {
    const next = [];
    res.push([]);

    for (let node of frontier) {
      res[res.length - 1].push(node.val);
      next.push(...node.children);
    }

    frontier = next;
  }

  return res;
};
