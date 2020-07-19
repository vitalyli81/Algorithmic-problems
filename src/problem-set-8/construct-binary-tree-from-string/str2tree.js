/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function (s) {
  if (!s || !s.length) return null;

  let count = 0;
  const firstP = s.indexOf('(');
  const val = firstP === -1 ? Number(s) : Number(s.substring(0, firstP));
  const node = new TreeNode(val);
  let secondP;

  if (firstP === -1) return node;

  for (let i = firstP; i < s.length; i++) {
    if (s[i] === '(') {
      count++;
    } else if (s[i] === ')') {
      count--;
    }

    if (count === 0) {
      secondP = i + 1;
    }
  }

  node.left = str2tree(s.substring(firstP + 1, secondP - 1));
  node.right = str2tree(s.substring(secondP + 1, s.length));

  return node;
};
