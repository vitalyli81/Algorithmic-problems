/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;

  const copy = new Map();
  let cur = head;

  while (cur) {
    copy.set(cur, new Node(cur.val));
    cur = cur.next;
  }

  cur = head;

  while (cur) {
    copy.get(cur).next = copy.get(cur.next) || null;
    copy.get(cur).random = copy.get(cur.random) || null;
    cur = cur.next;
  }

  return copy.get(head);
};
