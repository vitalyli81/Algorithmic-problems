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

const removeNthFromEnd = (head, n) => {
  if (n === 0) return head;
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = head;
  let size = 0;

  while (current) {
    size++;
    current = current.next;
  }

  current = dummy;
  size -= n;

  while (size) {
    size--;
    current = current.next;
  }
  current.next = current.next.next;

  return dummy.next;
};

export default removeNthFromEnd;
