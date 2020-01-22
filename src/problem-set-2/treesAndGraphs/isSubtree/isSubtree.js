/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  const sHash = { val: ' ' };
  const tHash = { val: ' ' };
  preorderStr(s, sHash);
  preorderStr(t, tHash);

  return sHash.val.indexOf(tHash.val) !== -1;
};

const preorderStr = (node, strHash) => {
  if (node === null) {
    strHash.val += 'X';
    return;
  }
  strHash.val += `${node.val} `;
  preorderStr(node.left, strHash);
  preorderStr(node.right, strHash);
};
