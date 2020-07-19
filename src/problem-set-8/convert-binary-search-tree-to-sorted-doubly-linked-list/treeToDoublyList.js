/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (root === null) return root;
  let first = null;
  let last = null;
  const inorder = (node) => {
    if (node === null) return node;

    inorder(node.left);

    if (first === null) {
      first = node;
    } else {
      last.right = node;
      node.left = last;
    }

    last = node;
    inorder(node.right);
  };

  inorder(root);
  first.left = last;
  last.right = first;

  return first;
};
