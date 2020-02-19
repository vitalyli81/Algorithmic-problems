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
var averageOfLevels = function(root) {
  let avg = [];
  let frontier = [root];
  while (frontier.length) {
    const nextList = [];
    const len = frontier.length;
    let sum = 0;
    frontier.forEach(next => {
      if (next.left) {
        nextList.push(next.left);
      }
      if (next.right) {
        nextList.push(next.right);
      }
      sum += next.val;
    });
    avg.push(sum / len);
    frontier = nextList;
  }

  return avg;
};
