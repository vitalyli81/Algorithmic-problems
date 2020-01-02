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
const verticalTraversal = root => {
  const reports = [];
  const coords = [];
  let temp = [];

  makeCoord(root, 0, 0, coords);
  coords.sort((a, b) => a.x - b.x);
  temp.push(coords[0]);

  for (let i = 0; i < coords.length - 1; i++) {
    const cur = coords[i];
    const next = coords[i + 1];

    if (cur.x === next.x) {
      temp.push(next);
    } else {
      temp.sort((a, b) => {
        if (a.y == b.y) return a.val - b.val;
        return a.y - b.y;
      });
      reports.push(temp.map(node => node.val));
      temp = [next];
    }
  }

  if (temp.length) {
    temp.sort((a, b) => {
      if (a.y == b.y) return a.val - b.val;
      return a.y - b.y;
    });
    reports.push(temp.map(node => node.val));
  }

  return reports;
};

const makeCoord = (node, x, y, coords) => {
  if (node === null) return;
  coords.push({ x, y, val: node.val });
  makeCoord(node.left, x - 1, y + 1, coords);
  makeCoord(node.right, x + 1, y + 1, coords);
};
