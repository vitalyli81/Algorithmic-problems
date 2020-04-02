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
  function helper(pre1, pre2, post1, post2) {
    if (pre1 > pre2 || post1 > post2) return null;
    const root = new TreeNode(pre[pre1]);
    if (pre1 + 1 <= pre2) {
      const leftIndex = postHash[pre[pre1 + 1]];
      const leftCount = leftIndex - post1;
      root.left = helper(
        pre1 + 1,
        pre1 + leftCount + 1,
        post1,
        post1 + leftCount
      );
      root.right = helper(
        pre1 + leftCount + 2,
        pre2,
        post1 + leftCount + 1,
        post2 - 1
      );
    }

    return root;
  }

  const postHash = {};
  post.forEach((val, i) => {
    postHash[val] = i;
  });

  return helper(0, pre.length - 1, 0, post.length - 1);
};
