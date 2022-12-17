//const _ = require('underscore')

var FunctionalStack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //storage needs to include a counter property
  storage.counter = 0;

  var index = 0
  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++
    storage.counter++

  //key is counter: value is the pushed value
  //finds largest number key and
  //increases counter by 1
  };

  someInstance.pop = function() {
  //removes largest number key
  //decreases counter
    for (var key in storage) {
      if (parseInt(key) === index - 1) {
        var res = storage[key]
        delete(storage[key])
      }
    }

    if (index > 0 && storage.counter > 0) {
      index--
      storage.counter--
    }

    return res
  };

  someInstance.size = function() {
    //returns current counter in storage
    return storage.counter;
  };

  return someInstance;
};

var FNSharedStack = function() {
  var instance = {};
  //use storage to store idx: value pairs

  instance.idx = 0
  instance.storage = {};

  // _.extend(instance, stackMethods)
  instance.push = stackMethods.push
  instance.pop = stackMethods.pop
  instance.size = stackMethods.size

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

var PrototypalStack = function() {
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
      var res = this.storage[key];
      delete this.storage[key];
    }
  }

  // this.storage.forEach(function(val, key) {
  //   if (parseInt(key) === this.idx - 1) {
  //     var res = this.storage[key];
  //     delete this.storage[key];
  //   }
  // }, this.instance)

  // if number version of key is equal to idx - 1
    // store the value at that key
    // delete the key
  // make pop not work for empty storages
  if (this.idx > 0) {
    this.idx--
  }

  // return stored res
  return res
}
stackMethods.size = function () {
  return this.idx
}

var PseudoStack = function() {
  this.storage = {}
  this.idx = 0;
};

PseudoStack.prototype.push = function (val) {
  this.storage[this.idx] = val;
  this.idx++
}

PseudoStack.prototype.pop = function () {
  for (var key in this.storage) {
    if (parseInt(key) === this.idx - 1) {
      var res = this.storage[key];
      delete this.storage[key]
    }
  }

  if (this.idx > 0) {
    this.idx--
  }

  return res
}

PseudoStack.prototype.size = function () {
  return this.idx
}

class ES6Stack {

  constructor() {
    this.storage = {},
    this.idx = 0;
  }

  push(val) {
    this.storage[this.idx] = val
    this.idx++
  }

  pop() {
    for (var key in this.storage) {
      if (parseInt(key) === this.idx - 1) {
        var res = this.storage[key]
        delete this.storage[key]
      }
    }

    if (this.idx > 0) {
      this.idx--
    }

    return res
  }

  size() {
    return this.idx
  }
}

var counter = 0
while (counter < 500) {
  new ES6Stack() //20 runs 12.32 ms (12.25 ms network transfer + 65 μs resource loading)

  counter++
}

//500runs:
// fn: Duration 30.28 ms (30.22 ms network transfer + 61 μs resource loading)
// fnshared: Duration 26.70 ms (25.86 ms network transfer + 0.84 ms resource loading)
// prototypal Duration 18.62 ms (18.51 ms network transfer + 0.10 ms resource loading)
// pseudo Duration 12.79 ms (12.69 ms network transfer + 98 μs resource loading)
// es6 Duration 12.85 ms (12.77 ms network transfer + 72 μs resource loading)


