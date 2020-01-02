const splitArray = (nums, m) => {
  let max = 0;
  let sum = 0;
  let ans = 0;

  nums.forEach(num => {
    max = Math.max(max, num);
    sum += num;
  });
  ans = Math.max(max, Math.ceil(sum / m));

  while (true) {
    if (canSumFit(nums, m, ans)) {
      break;
    }

    ans++;
  }

  return ans;
};

const canSumFit = (nums, m, sum) => {
  let count = 1;
  let curSum = 0;

  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    if (curSum > sum) {
      curSum = nums[i];
      count++;

      if (count > m) {
        break;
      }
    }
  }
  return count <= m;
};
