/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.nums = [];
  this.hash = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.hash[val] !== undefined) {
    return false;
  }
  this.hash[val] = this.nums.length;
  this.nums.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.hash[val] === undefined) {
    return false;
  }
  const pos = this.hash[val];
  if (pos < this.nums.length - 1) {
    const last = this.nums[this.nums.length - 1];
    this.nums[pos] = last;
    this.hash[last] = pos;
  }
  delete this.hash[val];
  this.nums.pop();
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.nums[Math.floor(Math.random() * this.nums.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
