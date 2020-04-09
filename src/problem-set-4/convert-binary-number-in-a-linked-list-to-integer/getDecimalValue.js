/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let binary = '';
  let cur = head;

  while (cur) {
    binary += cur.val;
    cur = cur.next;
  }

  return parseInt(binary, 2);
};
