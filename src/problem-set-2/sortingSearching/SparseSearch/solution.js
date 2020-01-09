export const sparseSearch = (list, target) => {
  if (!list.length || !target) return -1;
  return binarySearch(list, target, 0, list.length - 1);
};

const binarySearch = (list, target, start, end) => {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (!list[mid]) {
    let left = mid - 1;
    let right = mid + 1;

    while (true) {
      if (left < start && right > end) {
        return -1;
      } else if (right <= end && list[right]) {
        mid = right;
        break;
      } else if (left >= start && list[left]) {
        mid = left;
        break;
      }
      left--;
      right++;
    }
  }

  if (list[mid] === target) {
    return mid;
  } else if (target < list[mid]) {
    return binarySearch(list, target, start, mid - 1);
  } else {
    return binarySearch(list, target, mid + 1, end);
  }
};
