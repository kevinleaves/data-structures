var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    let node = Node(value);
    // edge case empty list, head becomes tail
    if (!list.head) {
      list.head = node;
    } else {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function () {
    // remove head call on an empty list?
    const prevHead = list.head;
    list.head = list.head.next;
    prevHead.next = null;
    return prevHead.value;
  };

  list.contains = function (target) {
    let curr = list.head;
    while (curr) {
      if (target === curr.value) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
