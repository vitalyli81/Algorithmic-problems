class Node {
  constructor(n) {
    this.count = n;
    this.next = null;
    this.prev = null;
    this.set = new Set();
  }
}

/**
 * Initialize your data structure here.
 */
var AllOne = function () {
  this.countMap = {};
  this.countNodeMap = {};
  this.head = new Node(-Infinity);
  this.tail = new Node(Infinity);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
  if (this.countMap[key] !== undefined) {
    this.change(key, 1);
  } else {
    this.countMap[key] = 1;
    if (this.head.next.count !== 1) {
      this.addNodeAfter(new Node(1), this.head);
    }
    this.head.next.set.add(key);
    this.countNodeMap[1] = this.head.next;
  }
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  if (this.countMap[key] !== undefined) {
    const count = this.countMap[key];

    if (count === 1) {
      delete this.countMap[key];
      this.removeKeyFromNode(this.countNodeMap[count], key);
    } else {
      this.change(key, -1);
    }
  }
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  return this.tail.prev === this.head
    ? ''
    : this.tail.prev.set[Symbol.iterator]().next().value;
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  return this.head.next === this.tail
    ? ''
    : this.head.next.set[Symbol.iterator]().next().value;
};

AllOne.prototype.change = function (key, value) {
  const count = this.countMap[key];
  this.countMap[key] += value;
  const curNode = this.countNodeMap[count];
  let newNode;

  if (this.countNodeMap[count + value]) {
    newNode = this.countNodeMap[count + value];
  } else {
    newNode = new Node(count + value);
    this.countNodeMap[count + value] = newNode;
    this.addNodeAfter(newNode, curNode);
  }

  newNode.set.add(key);
  this.removeKeyFromNode(curNode, key);
};

AllOne.prototype.removeKeyFromNode = function (node, key) {
  node.set.delete(key);
  if (node.set.size === 0) {
    this.removeNodeFromList(node);
    delete this.countNodeMap[node.count];
  }
};

AllOne.prototype.removeNodeFromList = function (node) {
  node.next.prev = node.prev;
  node.prev.next = node.next;
  node.next = null;
  node.prev = null;
};

AllOne.prototype.addNodeAfter = function (newNode, prevNode) {
  newNode.prev = prevNode;
  newNode.next = prevNode.next;
  prevNode.next.prev = newNode;
  prevNode.next = newNode;
};
