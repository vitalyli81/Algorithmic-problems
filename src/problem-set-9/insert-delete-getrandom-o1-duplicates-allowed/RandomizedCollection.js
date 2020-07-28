/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
  this.hash = {};
  this.nums = [];
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  let res = false;

  if (this.hash[val] === undefined) {
    res = true;
    this.hash[val] = [];
  }

  this.hash[val].push(this.nums.length);
  this.nums.push([val, this.hash[val].length - 1]);

  return res;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (this.hash[val] === undefined) return false;

  const valIdx = this.hash[val].pop();
  const lastIdx = this.nums.length - 1;

  if (this.hash[val].length === 0) delete this.hash[val];

  if (lastIdx === valIdx) {
    this.nums.pop();
    return true;
  }

  this.nums[valIdx] = this.nums[lastIdx];
  this.nums.pop();

  const [key, idx] = this.nums[valIdx];

  this.hash[key][idx] = valIdx;

  return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  const idx = Math.floor(Math.random() * this.nums.length);
  return this.nums[idx][0];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
