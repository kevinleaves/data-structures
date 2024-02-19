var Queue = function() {
  // makes instances of QUEUES
  var instance = {}

  // once we have a queue instance
  // below are properties of the queue:
  // every queue has a storage, every queue has start + end pointers

  instance.storage = {};
  instance.start = 0;
  instance.end = 0;

  _.extend(instance, queueMethods)

  //returns instance of queue
  return instance
};

var queueMethods = {};

queueMethods.enqueue = function (val) {
  this.storage[this.end] = val
  this.end++
}

queueMethods.dequeue = function () {
  for (var key in this.storage) {
    if (parseInt(key) === this.start) {
      var res = this.storage[key]
      delete this.storage[key]
    }
  }

  if (this.end - this.start > 0) {
    this.start++
  }

  return res
}

queueMethods.size = function () {

  return this.end - this.start
}
