class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    // create new node
    const node = new ListNode(value);
    if (!this.head) {
      // if no head, set head and tail
      this.tail = node;
    } else {
      // otherwise, current head node's prev is equal to new head
      // new head's next is equal to current head
      // set list head
      this.head.prev = node;
      node.next = this.head;
    }

    this.head = node;
  }

  removeHead() {
    // if no nodes
    // if 1 node
    const popped = this.head;
    if (popped === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      // if multiple nodes
      // remove prev pointer from next node
      popped.next.prev = null;
      this.head = popped.next;
    }
    return popped;
  }

  addToTail(value) {
    let node = new ListNode(value);
    // if empty list, set head along with tail
    if (this.head === null) {
      this.head = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
    }
    this.tail = node;
  }

  removeTail() {
    // case: no nodes
    const popped = this.tail;
    // case: 1 node
    if (popped === this.head) {
      this.head = null;
    } else {
      // case: multiple nodes
      popped.prev.next = null;
      this.tail = popped.prev;
      popped.prev = null;
    }
    return popped;
  }

  contains(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }
}

class ListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
