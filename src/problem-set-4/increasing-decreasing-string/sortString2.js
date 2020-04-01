/**
 * @param {string} s
 * @return {string}
 */

const deleteNode = node => {
  const prev = node.prev;
  const next = node.next;
  next.prev = prev;
  prev.next = next;
};

const addNode = (node, val) => {
  const newNode = new Node(val);
  const next = node.next;
  node.next = newNode;
  newNode.prev = node;
  newNode.next = next;
  next.prev = newNode;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

var sortString = function(s) {
  const CHAR_DIFF = 97;
  const hash = Array(26).fill(0);
  let res = '';
  const head = {};
  const tail = {};
  head.next = tail;
  tail.prev = head;

  for (let c of s) {
    const code = c.charCodeAt() - CHAR_DIFF;
    hash[code]++;
  }

  for (let i = hash.length - 1; i >= 0; i--) {
    if (hash[i]) {
      addNode(head, i);
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
        deleteNode(cur);
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
        deleteNode(cur);
      }
      cur = cur.prev;
    }
  }

  return res;
};
