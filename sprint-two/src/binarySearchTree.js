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
    if (!this.left) {
      // this.left = BinarySearchTree(value)
      this.left = BinarySearchTree(value)
    } else {
      // call insert with this.left
      this.left.insert(value)
    }
  } else {
    if (!this.right) {
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
  // declare res default false
  var res = false;
  // check val to see if it's equal,
  if (this.value === value) {
    // if so return true
    return true;
  }

  // if val < this.val
  if (value < this.value) {
    // if node is there,
    if (this.left) {
      // set res equal to recursive call left
      res = this.left.contains(value);
    }
  }

  // if val > this.val
  if (value > this.value) {
    // if node is there,
    if (this.right) {
      // set res equal to recursive call right
      res = this.right.contains(value);
    }
  }

  // return res
  return res;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // call callback function on value of node bound to this
  cb(this.value);

  // if node on left does not have a value of null
  if (this.left) {
    // recursively call depthFirstLog on node on left with argument of cb
    this.left.depthFirstLog(cb)
  }

  // if node on right does not have a value of null
  if (this.right) {
    this.right.depthFirstLog(cb)
  }
    // recursively call depthFirstLog on node on right with argument of cb
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
