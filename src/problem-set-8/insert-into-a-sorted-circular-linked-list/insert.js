/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  if (!head) {
    head = new Node(insertVal);
    head.next = head;
    return head;
  }

  let cur = head;
  let next = head.next;

  while (next !== head) {
    if (cur.val > next.val && (insertVal >= cur.val || insertVal <= next.val)) {
      cur.next = new Node(insertVal, next);
      return head;
    }

    if (cur.val <= insertVal && insertVal <= next.val) {
      cur.next = new Node(insertVal, next);
      return head;
    }

    cur = next;
    next = next.next;
  }

  cur.next = new Node(insertVal, next);

  return head;
};
