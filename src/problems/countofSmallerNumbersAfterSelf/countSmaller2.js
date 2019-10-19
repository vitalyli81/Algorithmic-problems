export const countSmaller = nums => {
  const result = Array(nums.length);
  const bst = new Bst();

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = bst.add(nums[i]);
  }

  return result;
};

class Bst {
  constructor() {
    this.root = null;
  }

  add(key) {
    let node = this.root;
    let leaf = node;
    const newNode = {
      value: key,
      count: 0
    };

    while (node) {
      leaf = node;

      if (key > node.value) {
        newNode.count++;
        node = node.right;
      } else {
        node = node.left;
      }
    }

    if (!this.root) {
      this.root = newNode;
      return 0;
    }

    if (key > leaf.value) {
      leaf.right = newNode;
    } else {
      leaf.left = newNode;
    }

    return newNode.count;
  }
}

export default countSmaller;
