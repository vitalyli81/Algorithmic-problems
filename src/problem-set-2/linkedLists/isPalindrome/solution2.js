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

const reverse = head => {
  let prev = null;

  while (head) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
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
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let reversedHalf = reverse(slow);

  return isEqual(reversedHalf, head);
};
