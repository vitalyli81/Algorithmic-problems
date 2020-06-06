/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  if (!root) {
    return [];
  }

  const res = [];

  traverse(root, sum, res, []);

  return res;
};

function traverse(node, sum, res, cur) {
  cur.push(node.val);

  if (!node.left && !node.right) {
    if (sum === node.val) {
      res.push([...cur]);
    }
    cur.pop();

    return;
  }

  if (node.left) {
    traverse(node.left, sum - node.val, res, cur);
  }

  if (node.right) {
    traverse(node.right, sum - node.val, res, cur);
  }

  cur.pop();
}
