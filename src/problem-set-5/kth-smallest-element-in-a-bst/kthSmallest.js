/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  if (!root) return root;
  augmentBst(root);
  let resNode = osSelect(root, k);
  return resNode.val;
};

function osSelect(node, k) {
  const rank = node.left ? node.left.size + 1 : 1;
  if (rank === k) {
    return node;
  } else if (k < rank) {
    return osSelect(node.left, k);
  } else {
    return osSelect(node.right, k - rank);
  }
}

function augmentBst(node) {
  if (!node) {
    return 0;
  }
  node.size = augmentBst(node.left) + augmentBst(node.right) + 1;
  return node.size;
}
