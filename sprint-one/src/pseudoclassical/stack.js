var Stack = function() {
  this.storage = {}
  this.idx = 0;
};

Stack.prototype.push = function (val) {
  this.storage[this.idx] = val;
  this.idx++
}

Stack.prototype.pop = function () {
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

Stack.prototype.size = function () {
  return this.idx
}

