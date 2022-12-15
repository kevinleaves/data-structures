class Queue {

  constructor() {
    this.storage = {},
    this.start = 0,
    this.end = 0
  }

  enqueue(val) {
    this.storage[this.end] = val
    this.end++
  }

  dequeue() {
    for (var key in this.storage) {
      if (parseInt(key) === this.start) {
        var res = this.storage[key]
        delete this.storage[key]
      }
    }

    if (this.start !== this.end) {
      this.start++
    }
    return res
  }

  size() {
    return this.end - this.start
  }
}
