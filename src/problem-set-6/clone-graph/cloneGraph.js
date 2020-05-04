/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return node;
  const newNode = new Node(node.val, []);
  const frontier = [node];
  const visited = new Map();
  visited.set(node, newNode);

  while (frontier.length) {
    const current = frontier.pop();

    for (let next of current.neighbors) {
      if (!visited.has(next)) {
        visited.set(next, new Node(next.val, []));
        frontier.push(next);
      }
      visited.get(current).neighbors.push(visited.get(next));
    }
  }

  return newNode;
};
