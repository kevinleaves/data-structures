var Stack = function() {
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
      console.log(key, 'key', index, 'idx', storage)
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


// var myStack = Stack()
// myStack.push('5') //storage {'0': '5'}

