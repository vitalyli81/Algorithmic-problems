/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  const stack = [root];
  const result = [];
  if (!root) return result;

  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    for (let i = 0; i < node.children.length; i++) {
      stack.push(node.children[i]);
    }
  }

  return result.reverse();
};
