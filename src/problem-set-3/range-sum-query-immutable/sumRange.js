class NumArray {
  constructor(nums) {
    this.sum = Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
      this.sum[i + 1] = nums[i] + this.sum[i];
    }
  }

  sumRange(i, j) {
    return this.sum[j + 1] - this.sum[i];
  }
}
