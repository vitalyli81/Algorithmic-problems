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
var serialize = function (root, str = '') {
  if (!root) {
    str += 'null,';
  } else {
    str += `${root.val},`;
    str = serialize(root.left, str);
    str = serialize(root.right, str);
  }
  return str;
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

    if (cur === 'null') {
      return null;
    }

    const node = new TreeNode(cur);
    node.left = helper(list);
    node.right = helper(list);

    return node;
  };

  const list = data.split(',');

  if (!list || !list.length) {
    return null;
  }

  if (list[list.length - 1] === '') {
    list.pop();
  }

  list.reverse();

  return helper(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
