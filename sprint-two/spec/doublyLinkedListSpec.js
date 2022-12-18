describe('doublyLinkedList', function () {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = new DoublyLinkedList();
  });

  it('should have methods named "addToTail", "removeHead", "contains", "addToHead", and "removeTail', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should designate a new head when new nodes are added', function() {
    doublyLinkedList.addToHead(2);
    expect(doublyLinkedList.head.value).to.equal(2);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
    expect(doublyLinkedList.head.next.value).to.equal(2);
  });


  it('should contain a value that was added', function() {
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(6);
    doublyLinkedList.addToTail(10);
    doublyLinkedList.contains(10);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.removeHead()).to.equal(4);
    expect(doublyLinkedList.head.value).to.equal(5)
  });

  it('should not contain a value that was removed from tail', function() {
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(7);
    doublyLinkedList.addToTail(9);
    doublyLinkedList.removeTail();
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.contains(5)).to.equal(false);
  });


});