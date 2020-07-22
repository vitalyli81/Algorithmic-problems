/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var findClosestLeaf = function (root, k) {
  const backHash = {};
  const front = [];
  const visited = {};

  const kNode = dfs(root, backHash, k);
  front.push(kNode);
  visited[kNode.val] = true;

  while (front.length > 0) {
    const cur = front.shift();

    if (cur.left === null && cur.right === null) return cur.val;

    if (cur.left !== null && !visited[cur.left.val]) {
      visited[cur.left.val] = true;
      front.push(cur.left);
    }

    if (cur.right !== null && !visited[cur.right.val]) {
      visited[cur.right.val] = true;
      front.push(cur.right);
    }

    if (backHash[cur.val] !== undefined && !visited[backHash[cur.val].val]) {
      visited[backHash[cur.val].val] = true;
      front.push(backHash[cur.val]);
    }
  }

  return -1;
};

const dfs = (node, backHash, k) => {
  if (node.val === k) {
    return node;
  }

  if (node.left !== null) {
    backHash[node.left.val] = node;
    const left = dfs(node.left, backHash, k);
    if (left !== null) {
      return left;
    }
  }

  if (node.right !== null) {
    backHash[node.right.val] = node;
    const right = dfs(node.right, backHash, k);
    if (right !== null) {
      return right;
    }
  }

  return null;
};
