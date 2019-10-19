export const countSmaller = nums => {
  const result = Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }

    result[i] = count;
  }

  return result;
};

export default countSmaller;
