/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return [];
  return generate(1, n);
};

const generate = (start, end) => {
  const list = [];
  if (start > end) return [null];

  for (let i = start; i <= end; i++) {
    const left = generate(start, i - 1);
    const right = generate(i + 1, end);

    left.forEach((lNode) => {
      right.forEach((rNode) => {
        const root = new TreeNode(i);
        root.left = lNode;
        root.right = rNode;
        list.push(root);
      });
    });
  }

  return list;
};
