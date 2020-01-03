/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const reverseAndClone = node => {
  let head = null;

  while (node) {
    const n = new ListNode(node.val);
    n.next = head;
    head = n;
    node = node.next;
  }

  return head;
};

const isEqual = (list1, list2) => {
  while (list1) {
    if (list1.val !== list2.val) return false;

    list1 = list1.next;
    list2 = list2.next;
  }

  return true;
};

var isPalindrome = function(head) {
  const reversed = reverseAndClone(head);
  return isEqual(head, reversed);
};
