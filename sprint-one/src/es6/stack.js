class Stack {

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