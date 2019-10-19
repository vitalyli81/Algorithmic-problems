const splitArray = (nums, m) => {
  let max = 0;
  let sum = 0;

  nums.forEach(num => {
    max = Math.max(max, num);
    sum += num;
  });

  while (max < sum) {
    let mid = Math.floor((max + sum) / 2);
    let curSum = 0;
    let count = 1;

    for (let i = 0; i < nums.length; i++) {
      if (curSum + nums[i] > mid) {
        count++;
        curSum = 0;
        if (count > m) {
          break;
        }
      }
      curSum += nums[i];
    }

    if (count > m) {
      max = mid + 1;
    } else {
      sum = mid;
    }
  }

  return max;
};
