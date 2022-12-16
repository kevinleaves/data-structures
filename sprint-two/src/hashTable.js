

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);


};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if no bucket at index
  console.log(this._storage)
  if (!this._storage.get(index)) {
    // create bucket at index
    this._storage.set(index, []);
    // console.log(this._storage.get(index))
  }

  //declare boolean var (didUpdate) as false
  var didUpdate = false;
  // iterate through bucket
  for (var i = 0; i < this._storage.get(index).length; i++) {
    // if bucket[i][0] is equal to k
    if (this._storage.get(index)[i][0] === k) {
      // replace bucket[i][1] with v
      this._storage.get(index)[i][1] = v;
      // change didUpdate to true
      didUpdate = true;
    }
  }

  // if didUpdate is false
  if (!didUpdate) {
    // create array with k at 0, v at 1
    var tuple = [k, v];
    // place array (tuple) in bucket
    this._storage.get(index).push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // loop through bucket at index
  for (var i = 0; i < this._storage.get(index).length; i++) {
    // find where given k is equal to first item of tuple
    if (this._storage.get(index)[i][0] === k) {
      //return the second item of the tuple
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // iterate through bucket at index
  for (var i = 0; i < this._storage.get(index).length; i++) {
    // if first item of current tuple is equal to k
    if (this._storage.get(index)[i][0] === k) {
      // delete that array from the original bucket
      this._storage.get(index).splice(i, 1);
    }
  };
}


/*
 * Complexity: What is the time complexity of the above functions?
 */


