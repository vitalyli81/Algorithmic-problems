/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let reversedHead = null;

  while (head) {
    const next = head.next;
    head.next = reversedHead;
    reversedHead = head;
    head = next;
  }

  return reversedHead;
};
