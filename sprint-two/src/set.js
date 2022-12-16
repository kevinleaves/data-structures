var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // add item as key and value to this.storage
  this.storage[item] = item;
};

setPrototype.contains = function(item) {
  return !!this.storage[item];
};

setPrototype.remove = function(item) {
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// add: O(1)
// contains: O(1)
// remove: O(1)