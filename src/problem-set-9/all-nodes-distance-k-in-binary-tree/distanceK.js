/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
  const parHash = new Map();
  const seen = new Set([null, target]);
  const queue = [null, target];
  let count = 0;

  dfs(root, null, parHash);

  while (queue.length) {
    const cur = queue.shift();

    if (cur === null) {
      if (count === K) {
        return queue.map((next) => next.val);
      }

      count++;
      queue.push(null);
    } else {
      if (!seen.has(cur.left)) {
        seen.add(cur.left);
        queue.push(cur.left);
      }

      if (!seen.has(cur.right)) {
        seen.add(cur.right);
        queue.push(cur.right);
      }

      if (!seen.has(parHash.get(cur))) {
        seen.add(parHash.get(cur));
        queue.push(parHash.get(cur));
      }
    }
  }

  return [];
};

const dfs = (node, par, parHash) => {
  if (node !== null) {
    parHash.set(node, par);
    dfs(node.left, node, parHash);
    dfs(node.right, node, parHash);
  }
};
