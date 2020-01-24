export const magicIndex2 = list => {
  return magicFast(list, 0, list.length - 1);
};

const magicFast = (list, start, end) => {
  if (start > end) return -1;
  const midIndex = Math.floor((start + end) / 2);
  const midValue = list[midIndex];
  if (midValue === midIndex) return midIndex;
  const leftIndex = Math.min(midIndex - 1, midValue);
  const left = magicFast(list, start, leftIndex);
  if (left >= 0) {
    return left;
  }

  const rightIndex = Math.max(midIndex + 1, midValue);
  const right = magicFast(list, rightIndex, end);
  return right;
};
