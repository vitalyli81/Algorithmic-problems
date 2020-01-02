export const countSmaller = nums => {
  const result = Array(nums.length);
  const bst = new Node(nums[nums.length - 1]);
  result[result.length - 1] = 0;

  for (let i = nums.length - 2; i >= 0; i--) {
    result[i] = bst.add(nums[i], 0);
  }

  return result;
};

class Node {
  constructor(val, size = 0) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.size = size;
  }

  add(val, size) {
    if (val > this.val) {
      if (this.right) {
        return this.right.add(val, this.size + size + 1);
      } else {
        this.right = new Node(val);
        return this.size + size + 1;
      }
    } else {
      this.size++;

      if (this.left) {
        return this.left.add(val, size);
      } else {
        this.left = new Node(val);
        return size;
      }
    }
  }
}

export default countSmaller;
