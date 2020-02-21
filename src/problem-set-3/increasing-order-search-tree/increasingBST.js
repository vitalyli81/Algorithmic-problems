/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  const newRoot = new TreeNode(0);
  let cur = newRoot;
  const list = [];
  inorderDfs(root, list);
  list.forEach(val => {
    cur.right = new TreeNode(val);
    cur = cur.right;
  });

  return newRoot.right;
};

const inorderDfs = (node, list) => {
  if (!node) return;
  inorderDfs(node.left, list);
  list.push(node.val);
  inorderDfs(node.right, list);
};
