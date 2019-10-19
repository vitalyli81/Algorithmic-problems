/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
const delNodes = (root, to_delete) => {
  const deleteMap = {};
  const forest = [];

  to_delete.forEach(el => {
    deleteMap[el] = 1;
  });

  buildForest(root, true, deleteMap, forest);

  return forest;
};

const buildForest = (node, isRoot, deleteMap, forest) => {
  if (!node) return null;
  const isDeleted = deleteMap[node.val];

  if (isRoot && !isDeleted) {
    forest.push(node);
  }
  node.left = buildForest(node.left, isDeleted, deleteMap, forest);
  node.right = buildForest(node.right, isDeleted, deleteMap, forest);

  return isDeleted ? null : node;
};
