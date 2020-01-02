/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  flattenChild(head);
  return head;
};

function flattenChild(head) {
  if (head === null) return head;
  if (head.child === null) {
    if (head.next === null) return head;
    return flattenChild(head.next);
  } else {
    let child = head.child;
    head.child = null;
    let next = head.next;
    let childTail = flattenChild(child);

    head.next = child;
    child.prev = head;

    if (next !== null) {
      childTail.next = next;
      next.prev = childTail;
      return flattenChild(next);
    }

    return childTail;
  }
}
