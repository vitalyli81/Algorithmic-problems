/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;

  let frontier = [root];

  while (frontier.length) {
    const next = [];

    for (let cur of frontier) {
      if (cur.left) {
        if (next.length) {
          next[next.length - 1].next = cur.left;
        }
        next.push(cur.left);
      }

      if (cur.right) {
        if (next.length) {
          next[next.length - 1].next = cur.right;
        }
        next.push(cur.right);
      }
    }

    frontier = next;
  }

  return root;
};
