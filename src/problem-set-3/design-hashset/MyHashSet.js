class ListNode {
  constructor(key) {
    this.key = key;
    this.next = null;
  }
}

/**
 * Initialize your data structure here.
 */
class MyHashSet {
  constructor() {
    this.buckets = [];
    this.bucketsCount = 1000;
  }

  hash(key) {
    return key % this.bucketsCount;
  }

  getBucketHead(key) {
    const index = this.hash(key);
    const bucketHead = (this.buckets[index] =
      this.buckets[index] || new ListNode(NaN));

    return bucketHead;
  }

  find(key, p) {
    while (p) {
      if (p.key === key) {
        return p;
      }
      p = p.next;
    }
  }

  /**
   
   * @return {void}
   */
  add(key) {
    const bucketHead = this.getBucketHead(key);
    const node = this.find(key, bucketHead);
    if (node !== undefined) {
      return;
    }
    const newNode = new ListNode(key);
    newNode.next = bucketHead.next;
    bucketHead.next = newNode;
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    const bucketHead = this.getBucketHead(key);
    let prev = bucketHead;
    let current = bucketHead.next;

    while (current) {
      if (current.key === key) {
        break;
      }
      prev = current;
      current = current.next;
    }

    if (current) {
      prev.next = current.next;
      current.next = null;
    }
  }

  /**
   * Returns true if this set contains the specified element
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    const bucketHead = this.getBucketHead(key);
    return this.find(key, bucketHead) !== undefined ? true : false;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
