var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function(value) {
  //create new tail node
  var newTail = new DNode(value);
  // if list is empty, list head is equal to list tail
  if (!this.head) {
    this.head = newTail;
  } else {
    // edit node 2 prev to be equal to previous tail
    newTail.prev = this.tail;
    // edit node 1 next to be equal to node 2
    this.tail.next = newTail;
  };

  //update list tail to be equal to new tail
  this.tail = newTail;
};

DoublyLinkedList.prototype.addToHead = function(value) {
  // create new head node
  var newHead = new DNode(value);
  // if list is empty, list head and tail are both new node
  if (!this.head) {
    this.head = newHead;
    this.tail = newHead;
    // else if head exists
  } else if (this.head) {
    this.head.prev = newHead;
    // edit prev property of old head node to point at new node
    newHead.next = this.head;
    // edit next property of new node to point to old head node
  }
  // update list head to be equal to new head
  this.head = newHead;
};

DoublyLinkedList.prototype.removeHead = function() {
  if (!this.head) {
    return null;
  }

  // declare variable representing value of head to be removed
  var oldHead = this.head;
  // move pointer for head to point at node after head
  this.head = this.head.next;

  // prev property of node after head becomes null
  oldHead.next.prev = null;

  // return value of former head node
  return oldHead.value
};

DoublyLinkedList.prototype.removeTail = function() {
  if (!this.tail) {
    return null;
  }
  // declare variable representing value of tail to be removed
  var oldTail = this.tail;

  // move pointer for tail to point at node at prev of tail node
  this.tail = oldTail.prev;

  // next property of node at prev of tail node becomes null
  this.tail.next = null;

  // return value of former tail node
  return oldTail.value;
};

DoublyLinkedList.prototype.contains = function(target) {
  // store reference to current head
  var currNode = this.head;
  // while current node exists
  while (currNode) {
    // compare target to current value, if true return true
    if (currNode.value === target) {
      return true;
    }
    // set current node equal to next node
    currNode = currNode.next;
  }
  //return false
  return false;
};

var DNode = function (value) {
  this.value = value;
  this.next = null;
  this.prev = null;
};