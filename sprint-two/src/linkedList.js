/*
 * Complexity: What is the time complexity of the above functions?
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    let node = new ListNode(value);
    // edge case empty list, head becomes tail
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  removeHead() {
    let prevHead = this.head;
    this.head = this.head.next;
    prevHead.next = null;
    return prevHead.value;
  }

  contains(target) {
    let curr = this.head;
    while (curr) {
      if (curr.value === target) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }
}

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
