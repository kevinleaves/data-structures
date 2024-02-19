

// Instantiate a new graph
var Graph = function() {
  this.adjacency = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // if key is not already in object
    // add key to object, intialize to an empty array
  if (!this.adjacency[node]) {
    this.adjacency[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //perform lookup on adjacency[node]
  return !!this.adjacency[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // perform lookup on adjacency[node]
  if (this.adjacency[node]) {
    // iterate over edges associated with that node
    for (var edge of this.adjacency[node]) {
      // remove edges to this node from other nodes
      for (var i = 0; i < this.adjacency[edge].length; i++) {
        if (this.adjacency[edge][i] === node) {
          this.adjacency[edge].splice(i, 1);
        }
      }
    }
    // delete node
    delete this.adjacency[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this.adjacency[fromNode], toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // push value of fromNode to toNode's array
  this.adjacency[fromNode].push(toNode);
  // push value of toNode to fromNode's array
  this.adjacency[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // iterate over fromNode's array
  for (var i = 0; i < this.adjacency[fromNode].length; i++) {
    // if the current value is equal to toNode
    if (this.adjacency[fromNode][i] === toNode) {
      // remove that value from fromNode's array
      this.adjacency[fromNode].splice(i, 1);
    }
  }
  // do once more with toNode's array
  for (var i = 0; i < this.adjacency[toNode].length; i++) {
    // if the current value is equal to toNode
    if (this.adjacency[toNode][i] === fromNode) {
      // remove that value from fromNode's array
      this.adjacency[toNode].splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate over nodes with a for in loop
  for (var key in this.adjacency) {
    // perform callback on value of node
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


