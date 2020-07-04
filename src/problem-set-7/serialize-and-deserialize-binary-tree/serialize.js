/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root, list = []) {
  if (!root) {
    list.push(null);
    return;
  }

  list.push(root.val);
  serialize(root.left, list);
  serialize(root.right, list);

  return list;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const helper = (list) => {
    const cur = list.pop();

    if (cur === null) {
      return null;
    }

    const node = new TreeNode(cur);
    node.left = helper(list);
    node.right = helper(list);

    return node;
  };

  if (!data || !data.length) {
    return null;
  }

  data.reverse();

  return helper(data);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
