/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = { size: 0 };
  this.head = {};
  this.tail = {};

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (key in this.map) {
    const current = this.map[key];

    current.prev.next = current.next;
    current.next.prev = current.prev;
    this.tail.prev.next = current;
    current.prev = this.tail.prev;
    current.next = this.tail;
    this.tail.prev = current;

    return current.value;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.get(key) !== -1) {
    this.tail.prev.value = value;
  } else {
    if (this.capacity === this.map.size) {
      delete this.map[this.head.next.key];
      this.map.size--;
      this.head.next = this.head.next.next;
      this.head.next.prev = this.head;
    }

    const newNode = { key, value };
    this.map[key] = newNode;
    this.map.size++;
    this.tail.prev.next = newNode;
    newNode.prev = this.tail.prev;
    newNode.next = this.tail;
    this.tail.prev = newNode;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
