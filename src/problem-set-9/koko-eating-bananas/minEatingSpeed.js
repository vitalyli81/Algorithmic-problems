/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function (piles, H) {
  let l = 1;
  let r = Math.max(...piles);

  while (l <= r) {
    const k = Math.floor((l + r) / 2);

    if (canEatAll(k, H, piles)) {
      r = k - 1;
    } else {
      l = k + 1;
    }
  }

  return l;
};

const canEatAll = (k, h, piles) => {
  let count = 0;

  for (let pile of piles) {
    count += Math.ceil(pile / k);
  }

  return count <= h;
};
