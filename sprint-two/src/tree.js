var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create new instance of tree
  var newTree = Tree(value);
  //push the new tree to the original children array
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  // check if target is equal to current node value
  var doesContain = false;
  if (this.value === target) {
    // if equal, return true
    return true;
  }

  // iterate through current node's children array
  for (var i = 0; i < this.children.length; i++) {
    // call contains on every child node
    doesContain = this.children[i].contains(target);
    if (doesContain === true) {
      break;
    }
  }

  // return false
  return doesContain;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
