/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];
  const stack = [];
  let cur = root;

  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }

  return res;
};
