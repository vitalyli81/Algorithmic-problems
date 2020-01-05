/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  const listHash = {};
  let listA = headA;
  let listB = headB;

  while (listA) {
    listHash[listA.val] = listA;
    listA = listA.next;
  }

  while (listB) {
    if (listHash[listB.val] === listB) return listB;
    listB = listB.next;
  }

  return null;
};
