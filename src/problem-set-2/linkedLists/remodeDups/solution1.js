export const removeDups = list => {
  const hash = {};

  let current = list;

  while (list) {
    if (hash[list.val]) {
      current.next = list.next;
    } else {
      hash[list.val] = 1;
      current = list;
    }

    list = list.next;
  }
};
