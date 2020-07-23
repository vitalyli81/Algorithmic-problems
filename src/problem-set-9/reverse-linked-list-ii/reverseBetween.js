/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (head === null) return null;

  let prev = null;
  let cur = head;

  while (m > 1) {
    prev = cur;
    cur = cur.next;
    m--;
    n--;
  }

  const start = prev;
  const end = cur;

  while (n > 0) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
    n--;
  }

  if (start !== null) {
    start.next = prev;
  } else {
    head = prev;
  }

  end.next = cur;

  return head;
};
