var Queue = function() {
  //instantiate queue using object.create to delegate a failed property lookup to queueMethods
  var instance = Object.create(queueMethods);

  //create props of Queue class
  instance.storage = {};
  instance.start = 0;
  instance.end = 0;
  instance.length = 0;

  //constructor functions return instances of their class
  return instance
};

var queueMethods = {};
queueMethods.enqueue = function (val) {
  this.storage[this.end] = val;
  this.end++
  this.length++
}
queueMethods.dequeue = function () {
  for (var key in this.storage) {
    if (parseInt(key) === this.start) {
      var res = this.storage[key]
      delete this.storage[key]
    }
  }

  if (this.end > this.start) {
    this.start++
    this.length--
  }

  return res;
}
queueMethods.size = function () {
  return this.length
}