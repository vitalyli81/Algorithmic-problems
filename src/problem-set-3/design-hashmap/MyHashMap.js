class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
/**
 * Initialize your data structure here.
 */
class MyHashMap {
  constructor() {
    this.buckets = [];
    this.bucketsCount = 100000;
  }

  hash(key) {
    return key % this.bucketsCount;
  }

  find(key, p) {
    while (p) {
      if (p.key === key) {
        return p;
      }
      p = p.next;
    }
  }

  getBucketHead(key) {
    const index = this.hash(key);
    const bucketHead = (this.buckets[index] =
      this.buckets[index] || new ListNode(NaN, NaN));

    return bucketHead;
  }
  /**
   * value will always be non-negative.
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    const bucketHead = this.getBucketHead(key);
    const node = this.find(key, bucketHead);
    if (node !== undefined) {
      node.value = value;
      return;
    }
    const newNode = new ListNode(key, value);
    newNode.next = bucketHead.next;
    bucketHead.next = newNode;
  }

  /**
   * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const bucketHead = this.getBucketHead(key);
    const node = this.find(key, bucketHead);
    if (node !== undefined) {
      return node.value;
    }
    return -1;
  }

  /**
   * Removes the mapping of the specified value key if this map contains a mapping for the key
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    const bucketHead = this.getBucketHead(key);
    let prev = bucketHead;
    let currrent = bucketHead.next;
    while (currrent) {
      if (currrent.key === key) {
        break;
      }
      prev = currrent;
      currrent = currrent.next;
    }
    if (currrent) {
      prev.next = currrent.next;
      currrent.next = null;
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
