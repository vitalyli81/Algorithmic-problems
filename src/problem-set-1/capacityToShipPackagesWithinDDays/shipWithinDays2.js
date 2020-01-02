/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
export const shipWithinDays = (weights, D) => {
  let max = 0;
  let sum = 0;

  weights.forEach(weight => {
    max = Math.max(weight, max);
    sum += weight;
  });

  while (max < sum) {
    let mid = Math.floor((max + sum) / 2);
    let cur = 0;
    let count = 1;

    weights.forEach(weight => {
      if (cur + weight > mid) {
        cur = 0;
        count++;
      }
      cur += weight;
    });

    if (count > D) {
      max = mid + 1;
    } else {
      sum = mid;
    }
  }

  return max;
};

export default shipWithinDays;
