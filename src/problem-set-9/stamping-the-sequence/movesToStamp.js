/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function (stamp, target) {
  const S = stamp.split('');
  const T = target.split('');
  const visited = {};
  const res = [];
  let stars = 0;

  while (stars < T.length) {
    let done = false;

    for (let i = 0; i <= T.length - S.length; i++) {
      if (!visited[i] && canReplace(i, T, S)) {
        stars += replace(i, T, S.length);
        visited[i] = true;
        done = true;
        res.push(i);

        if (stars === T.length) break;
      }
    }

    if (!done) return [];
  }

  res.reverse();

  return res;
};

const canReplace = (index, target, stamp) => {
  for (let i = 0; i < stamp.length; i++) {
    if (target[i + index] !== '*' && target[i + index] !== stamp[i]) {
      return false;
    }
  }

  return true;
};

const replace = (index, target, len) => {
  let stars = 0;
  for (let i = 0; i < len; i++) {
    if (target[i + index] !== '*') {
      target[i + index] = '*';
      stars++;
    }
  }

  return stars;
};
