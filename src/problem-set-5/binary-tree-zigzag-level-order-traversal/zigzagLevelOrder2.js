/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const res = [];
  let stack = [root];
  let level = 0;

  while (stack.length) {
    let next = [];

    stack.forEach((cur) => {
      if (cur) {
        res[level] = res[level] || [];
        res[level].push(cur.val);
        if (cur.left) {
          next.push(cur.left);
        }

        if (cur.right) {
          next.push(cur.right);
        }
      }
    });
    level++;
    stack = next;
  }

  res.forEach((v, i) => {
    if (i % 2 !== 0) {
      v.reverse();
    }
  });

  return res;
};
