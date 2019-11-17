class FindElements {
  constructor(root) {
    this.root = root;
    this.root.val = 0;
    this.seen = {};
    this.fixBst(this.root);
  }

  fixBst(node) {
    if (node === null) return;
    this.seen[node.val] = 1;

    if (node.left !== null) {
      node.left.val = node.val * 2 + 1;
      this.fixBst(node.left);
    }

    if (node.right !== null) {
      node.right.val = node.val * 2 + 2;
      this.fixBst(node.right);
    }
  }

  find(target) {
    return Boolean(this.seen[target]);
  }
}
