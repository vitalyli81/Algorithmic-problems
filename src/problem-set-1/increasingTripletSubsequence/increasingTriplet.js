const increasingTriplet = nums => {
  let min1 = Number.POSITIVE_INFINITY;
  let min2 = Number.POSITIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];

    if (min1 >= cur) {
      min1 = cur;
    } else if (min2 >= cur) {
      min2 = cur;
    } else {
      return true;
    }
  }

  return false;
};
