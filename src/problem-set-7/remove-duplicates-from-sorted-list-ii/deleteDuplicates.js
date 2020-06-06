/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;
  const tmp = new ListNode(0);
  tmp.next = head;
  let prev = tmp;
  let cur = head;

  while (cur) {
    while (cur.next && cur.val === cur.next.val) {
      cur = cur.next;
    }

    if (prev.next === cur) {
      prev = prev.next;
    }
    {
      prev.next = cur.next;
    }

    cur = cur.next;
  }

  return tmp.next;
};
