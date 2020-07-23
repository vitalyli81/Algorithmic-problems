/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  const stack = [];
  const list = [];

  while (head !== null) {
    list.push(head.val);
    head = head.next;
  }

  const res = Array(list.length).fill(0);

  for (let i = 0; i < list.length; i++) {
    while (stack.length && list[stack[stack.length - 1]] < list[i]) {
      res[stack.pop()] = list[i];
    }

    stack.push(i);
  }

  return res;
};
