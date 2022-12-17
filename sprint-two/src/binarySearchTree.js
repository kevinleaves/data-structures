var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.prototype)

  bst.value = value;
  bst.left = null;
  bst.right = null;

  return bst;
};

BinarySearchTree.prototype.insert = function(value) {
  // if value is less than this.value
  if (value < this.value) {
    // if this.left is null
    if (this.left === null) {
      // this.left = BinarySearchTree(value)
      this.left = BinarySearchTree(value)
    } else {
      // call insert with this.left
      this.left.insert(value)
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value)
    } else {
      // debugger;
      this.right.insert(value)
    }
  }
  // else
    // if this.right is null
      // this.right = BinarySearchTree(value)
    // else
      // call insert with this.right
};

BinarySearchTree.prototype.contains = function(value) {




};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  console.log('dfl')
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
