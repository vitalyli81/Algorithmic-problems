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

const getTailAndSize = head => {
  if (!head) return null;
  let current = head;
  let size = 1;

  while (current && current.next) {
    size++;
    current = current.next;
  }

  return { size, tail: current };
};

const getKthNode = (head, n) => {
  let current = head;

  while (n > 0 && current) {
    current = current.next;
    n--;
  }
  return current;
};

var getIntersectionNode = function(headA, headB) {
  if (!headB || !headA) return null;
  const result1 = getTailAndSize(headA);
  const result2 = getTailAndSize(headB);
  let shorter;
  let longer;

  if (result1.tail !== result2.tail) return null;

  shorter = result1.size < result2.size ? headA : headB;
  longer = result1.size < result2.size ? headB : headA;

  longer = getKthNode(longer, Math.abs(result1.size - result2.size));

  while (shorter !== longer) {
    longer = longer.next;
    shorter = shorter.next;
  }

  return longer;
};
