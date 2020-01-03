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
  let reverseHead = null;

  while (head) {
    const node = new ListNode(head.val);
    node.next = reverseHead;
    reverseHead = node;
    head = head.next;
  }

  return reverseHead;
};
