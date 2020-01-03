export const removeDups2 = list => {
  let current = list;

  while (current) {
    let runner = current;
    while (runner.next) {
      if (current.val === runner.next.val) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }

    current = current.next;
  }
};
