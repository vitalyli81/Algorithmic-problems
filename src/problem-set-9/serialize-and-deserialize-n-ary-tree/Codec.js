/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
  constructor() {}

  /**
   * @param {Node} root
   * @return {string}
   */
  // Encodes a tree to a single string.
  serialize = function (root) {
    if (root === null) return '';

    const res = [root.val];
    const front = [root];

    while (front.length) {
      const node = front.pop();

      for (let next of node.children) {
        front.push(next);
        res.push(next.val);
      }

      res.push('null');
    }
    res.reverse();
    return res.join(',');
  };

  /**
   * @param {string} data
   * @return {Node}
   */
  // Decodes your encoded data to tree.
  deserialize = function (data) {
    if (!data) return null;

    const arr = data.split(',');
    const root = new Node(arr.pop(), []);
    const front = [root];

    while (front.length) {
      const node = front.pop();

      while (arr[arr.length - 1] !== 'null') {
        const child = new Node(arr.pop(), []);
        node.children.push(child);
        front.push(child);
      }

      arr.pop();
    }

    return root;
  };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
