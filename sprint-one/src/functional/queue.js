var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //create a pointer that starts at the beginning
  var start = 0
  var end = 0

  // storage.start = start;
  // storage.end = end;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    //creates numeric keys in storage
    storage[end] = value;
    //increment end
    end++
  };

  someInstance.dequeue = function() {
    for (var key in storage) {
      if (parseInt(key) === start) {
        //store deleted value
        var res = storage[key];
        delete storage[key]
      }
    }

    //increment start to keep track of the next item to dequeue, prevents dequeue from affecting size if queue is empty
    if (end > start) {
      start++
    }

    //return deleted value
    return res
  };

  someInstance.size = function() {
    //returns distance between 2 pointers
    return end - start
  };

  return someInstance;
};
