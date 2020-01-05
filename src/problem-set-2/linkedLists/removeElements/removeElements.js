/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) return head;
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = head;
  let prev = dummy;

  while (current) {
    if (current.val === val) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }

  return dummy.next;
};
