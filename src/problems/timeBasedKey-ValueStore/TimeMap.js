class TimeMap {
  constructor() {
    this.map = {};
  }
  set(key, value, timestamp) {
    if (!this.map[key]) {
      this.map[key] = [];
    }
    this.map[key].push({ value, timestamp });
  }
  get(key, timestamp) {
    const list = this.map[key];

    return list ? this.getValue(list, timestamp) : '';
  }

  getValue(list, timestamp) {
    if (list.length === 1) return list[0].value;
    let left = 0;
    let right = list.length - 1;
    let mid;

    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      let cur = list[mid];

      if (cur.timestamp === timestamp) {
        return cur.value;
      } else if (cur.timestamp > timestamp) {
        right = mid - 1;
      } else if (
        mid + 1 >= list.length ||
        list[mid + 1].timestamp > timestamp
      ) {
        break;
      } else {
        left = mid + 1;
      }
    }

    return list[mid].timestamp <= timestamp ? list[mid].value : '';
  }
}
