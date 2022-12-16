var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // I: value passed in from call
  // O: n/a
  // C: n/a
  // E: if list is empty or has 1 node

  // Creating a new node with a given value, adding a pointer from the node that was at
  // the end to point at this new node, and moves tail pointer to point at new node.

  list.addToTail = function(value) {
    //create the new tail node
    var newTail = Node(value);

    //if the list is empty, the first node added is both the head and the tail
    if (list.head === null) {
      list.head = newTail;
    } else {
      list.tail.next = newTail;
    }

    //change linked list property tail to new tail
    list.tail = newTail;
  };

  list.removeHead = function() {
    //store value of head in a variable before we remove it
    var result = list.head.value;
    // move pointer of head to next node
    list.head = list.head.next;
    // return stored value
    return result;
  };

  list.contains = function(target) {
    // traverse linked list starting from the head
    var currNode = list.head;
    while (currNode) {
      // check current node's value, if it's equal to target
      if (currNode.value === target) {
        // return true
        return true;
      }
      // else currNode changes to next node
      currNode = currNode.next;
    }
    // return false
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// O(1)
// O(1)
// O(n)
