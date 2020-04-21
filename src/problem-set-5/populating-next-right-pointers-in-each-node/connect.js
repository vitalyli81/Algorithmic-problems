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

  let queue = [root];

  root.next = null;

  while (queue.length) {
    let next = [];

    for (let cur of queue) {
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
        cur.right.next = null;
      }
    }

    queue = next;
  }

  return root;
};
