/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeNthFromEnd2 = (head, n) => {
  let dummy = new ListNode(0);
  dummy.next = head;
  let p1 = dummy;
  let p2 = dummy;

  for (let i = 0; i <= n; i++) {
    if (!p1) return null;
    p1 = p1.next;
  }

  while (p1) {
    p1 = p1.next;
    p2 = p2.next;
  }
  p2.next = p2.next.next;
  return dummy.next;
};

export default removeNthFromEnd2;
