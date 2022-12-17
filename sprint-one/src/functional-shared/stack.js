// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try to not reference your old code in writing the new style.

var Stack = function() {
  var instance = {};
  //use storage to store idx: value pairs

  instance.idx = 0
  instance.storage = {};

  _.extend(instance, stackMethods)


  return instance
};

var stackMethods = {};
stackMethods.push = function (value) {
  this.storage[this.idx] = value;
  this.idx++
}

stackMethods.pop = function () {
  //iterate through keys
  for (var key in this.storage) {
    //if numeric version of key is equal to idx-1
    if (parseInt(key) === this.idx - 1) {
      //store return res
      var res = this.storage[key]
      //delete key
      delete this.storage[key]
    }
  }

  if (this.idx > 0) {
    this.idx--
  }

  return res
}

stackMethods.size = function () {
  return this.idx
}



