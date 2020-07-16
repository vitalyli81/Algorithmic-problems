/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
  if (ages.length < 2) {
    return ages.length;
  }

  const count = Array(121).fill(0);
  let res = 0;

  ages.forEach((n) => count[n]++);

  for (let ageA = 0; ageA < 121; ageA++) {
    for (let ageB = 0; ageB < 121; ageB++) {
      if (willFriend(ageA, ageB)) {
        res += count[ageA] * count[ageB];
        if (ageA === ageB) {
          res -= count[ageA];
        }
      }
    }
  }

  return res;
};

function willFriend(ageA, ageB) {
  if (ageB <= 0.5 * ageA + 7 || ageB > ageA || (ageB > 100 && ageA < 100)) {
    return false;
  }

  return true;
}
