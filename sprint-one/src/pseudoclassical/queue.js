var Queue = function() {
  this.storage = {}
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function (val) {
  this.storage[this.end] = val
  this.end++
}
Queue.prototype.dequeue = function () {
  for (var key in this.storage) {
    if (parseInt(key) === this.start) {
      var res = this.storage[key]
      delete this.storage[key]
    }
  }

  if (this.end !== this.start) {
    this.start++
  }

  return res
}

Queue.prototype.size = function () {
  return this.end - this.start
}

