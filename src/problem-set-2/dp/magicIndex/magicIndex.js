export const magicIndex = list => {
  if (!list.length) return -1;
  return magicFast(list, 0, list.length - 1);
};

const magicFast = (list, start, end) => {
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);

  if (list[mid] === mid) return mid;

  if (list[mid] > mid) {
    return magicFast(list, start, mid - 1);
  } else {
    return magicFast(list, mid + 1, end);
  }
};
