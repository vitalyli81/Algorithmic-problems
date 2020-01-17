const successor = root => {
  let node = root;
  if (!node) return null;
  if (node.right) {
    return findMin(node.right);
  }
  let p = node.parent;
  while (p && p.right === node) {
    node = p;
    p = p.parent;
  }
  return p;
};

const findMin = root => {
  let node = root;
  if (!node) return null;
  while (node.left) {
    node = node.left;
  }

  return node;
};
