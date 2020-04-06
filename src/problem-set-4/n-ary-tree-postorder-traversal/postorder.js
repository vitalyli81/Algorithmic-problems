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
  const list = [];
  helper(root, list);
  return list;
};

function helper(root, list) {
  if (!root) return list;
  for (let i = 0; i < root.children.length; i++) {
    helper(root.children[i], list);
  }
  list.push(root.val);
  return list;
}
