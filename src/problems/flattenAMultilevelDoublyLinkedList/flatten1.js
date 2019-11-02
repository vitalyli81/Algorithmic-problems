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
  let node = head;

  while (node !== null) {
    if (node.child === null) {
      node = node.next;
      continue;
    }
    let temp = node.child;

    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = node.next;
    if (node.next !== null) {
      node.next.prev = temp;
    }

    node.next = node.child;
    node.child.prev = node;
    node.child = null;
  }

  return head;
};
