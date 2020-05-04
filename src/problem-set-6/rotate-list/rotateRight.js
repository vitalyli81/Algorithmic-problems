/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  const temp = new ListNode(0);
  let fast = temp;
  let slow = temp;
  let n = 0;
  temp.next = head;

  for (; fast.next; n++) {
    fast = fast.next;
  }

  for (let j = n - (k % n); j > 0; j--) {
    slow = slow.next;
  }

  fast.next = temp.next;
  temp.next = slow.next;
  slow.next = null;

  return temp.next;
};
