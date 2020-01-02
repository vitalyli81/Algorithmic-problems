/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  if (!s.length || !t.length) return '';

  const sHash = {};
  const tHash = {};
  let required = 0;
  let formed = 0;
  let left = 0;
  let right = 0;
  let minRange = -1;
  let minLeft = 0;
  let minRight = 0;

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    if (tHash[char] !== undefined) {
      tHash[char]++;
    } else {
      tHash[char] = 1;
      required++;
    }
  }

  while (right <= s.length) {
    if (required === formed && left <= right) {
      const char = s[left];

      if (minRange === -1 || minRange > right - left + 1) {
        minRange = right - left + 1;
        minLeft = left;
        minRight = right;
      }

      if (tHash[char] !== undefined) {
        sHash[char]--;
        if (sHash[char] < tHash[char]) {
          formed--;
        }
      }

      left++;
    } else {
      const char = s[right];

      if (tHash[char] !== undefined) {
        sHash[char] = (sHash[char] || 0) + 1;
        if (sHash[char] === tHash[char]) {
          formed++;
        }
      }

      right++;
    }
  }

  return minRange > -1 ? s.substring(minLeft, minRight) : '';
};
