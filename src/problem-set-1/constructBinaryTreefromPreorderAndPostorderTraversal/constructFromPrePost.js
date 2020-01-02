/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
  if (pre.length === 0) return null;

  const len = pre.length;
  const root = new TreeNode(pre[0]);
  let leftIndex = 0;

  if (len === 1) return root;

  for (let i = 0; i < len; i++) {
    if (pre[1] === post[i]) leftIndex = i + 1;
  }

  const leftPre = pre.slice(1, leftIndex + 1);
  const leftPost = post.slice(0, leftIndex);
  const rightPre = pre.slice(leftIndex + 1, len);
  const rightPost = post.slice(leftIndex, len - 1);

  root.left = constructFromPrePost(leftPre, leftPost);
  root.right = constructFromPrePost(rightPre, rightPost);

  return root;
};
