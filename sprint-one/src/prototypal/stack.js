var Stack = function() {
  //instantiate obj, delegate failed property lookups to methods obj
  var instance = Object.create(stackMethods);

  //properties of stack
  instance.storage = {};
  instance.idx = 0;

  // return obj
  return instance;
};

var stackMethods = {};

stackMethods.push = function (val) {
  this.storage[this.idx] = val;
  this.idx++
}

stackMethods.pop = function () {
  // iterate over storage keys

  for (var key in this.storage) {
    if (parseInt(key) === this.idx - 1) {
      console.log('im in here')
      var res = this.storage[key];
      delete this.storage[key];
    }
    console.log(res)
  }

  // if number version of key is equal to idx - 1
    // store the value at that key
    // delete the key
  // make pop not work for empty storages
  if (this.idx > 0) {
    this.idx--
  }
  console.log(this.idx)

  // return stored res
  return res
}
stackMethods.size = function () {
  return this.idx
}

