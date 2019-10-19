/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = root => {
  if (!root) return 0;
  const leftLevels = countLevels(root, 'left');
  const rightLevels = countLevels(root, 'right');

  if (leftLevels === rightLevels) {
    return (1 << leftLevels) - 1;
  } else {
    return 1 + countNodes(root.left) + countNodes(root.right);
  }
};

const countLevels = (node, direction = 'left') => {
  let count = 0;

  while (node) {
    count++;
    node = node[direction];
  }

  return count;
};
