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

  let ans = Math.max(max, Math.ceil(sum / D));

  while (true) {
    if (canShipWithinDays(weights, D, ans)) {
      break;
    }
    ans++;
  }

  return ans;
};

const canShipWithinDays = (weights, D, capacity) => {
  let count = 1;
  let currentSum = 0;

  for (let i = 0; i < weights.length; i++) {
    let weight = weights[i];
    currentSum += weight;
    if (currentSum > capacity) {
      count++;
      currentSum = weight;

      if (count > D) {
        break;
      }
    }
  }

  return count <= D;
};

export default shipWithinDays;
