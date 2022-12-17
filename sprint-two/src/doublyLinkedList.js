var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function (value) {
  //create new tail node
  var newTail = Node(value);

  // if list is empty, list head is equal to list tail
  if (!this.head) {
    this.head = newTail;
  } else {
    newTail.prev = this.tail;
    this.tail.next = newTail;
  }

  // edit node 2 prev to be equal to previous tail
  // edit node 1 next to be equal to node 2

  //update list tail to be equal to new tail
  this.tail = newTail;
}

DoublyLinkedList.prototype.addToHead = function () {

}

DoublyLinkedList.prototype.removeHead = function () {

}

DoublyLinkedList.prototype.removeTail = function () {

}

DoublyLinkedList.prototype.contains = function () {

}

// var Node = function (value) {
//   this.value = value;
//   this.next = null;
//   this.prev = null;
// }