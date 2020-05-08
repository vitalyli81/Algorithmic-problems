/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let list = new ListNode(0);
  const stack1 = [];
  const stack2 = [];

  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  while (stack1.length || stack2.length) {
    if (stack1.length) {
      sum += stack1.pop();
    }

    if (stack2.length) {
      sum += stack2.pop();
    }

    list.val = sum % 10;
    sum = Math.trunc(sum / 10);
    const head = new ListNode(sum);
    head.next = list;
    list = head;
  }

  return list.val === 0 ? list.next : list;
};
