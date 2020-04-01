/**
 * @param {string} s
 * @return {string}
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = {};
    this.tail = {};
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertNode(val) {
    const newNode = new Node(val);
    const next = this.head.next;
    this.head.next = newNode;
    newNode.prev = this.head;
    newNode.next = next;
    next.prev = newNode;
  }

  deleteNode(node) {
    const prev = node.prev;
    const next = node.next;
    next.prev = prev;
    prev.next = next;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}

var sortString = function(s) {
  const CHAR_DIFF = 97;
  const hash = Array(26).fill(0);
  let res = '';
  const list = new DoubleLinkedList();
  const head = list.getHead();
  const tail = list.getTail();

  for (let c of s) {
    const code = c.charCodeAt() - CHAR_DIFF;
    hash[code]++;
  }

  for (let i = hash.length - 1; i >= 0; i--) {
    if (hash[i]) {
      list.insertNode(i);
    }
  }

  while (head && head.next && head.next.val !== undefined) {
    let cur = head.next;
    while (cur && cur.val !== undefined) {
      if (hash[cur.val]) {
        res += String.fromCharCode(cur.val + CHAR_DIFF);
      }
      hash[cur.val]--;
      if (hash[cur.val] <= 0) {
        list.deleteNode(cur);
      }
      cur = cur.next;
    }

    cur = tail.prev;
    while (cur && cur.val !== undefined) {
      if (hash[cur.val]) {
        res += String.fromCharCode(cur.val + CHAR_DIFF);
      }
      hash[cur.val]--;
      if (hash[cur.val] <= 0) {
        list.deleteNode(cur);
      }
      cur = cur.prev;
    }
  }

  return res;
};
