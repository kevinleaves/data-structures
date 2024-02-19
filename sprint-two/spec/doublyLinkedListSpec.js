describe('doublyLinkedList', function () {
  let list;

  beforeEach(function () {
    list = new DoublyLinkedList();
  });

  it('should have a head and tail', function () {
    expect(list).to.have.property('head');
    expect(list).to.have.property('tail');
  });

  it('should add a node to the head of the list', function () {
    list.addToHead(1);
    expect(list.head.value).to.equal(1);
    expect(list.head.next).to.equal(null);
    expect(list.head.prev).to.equal(null);
    expect(list.tail.value).to.equal(1);
    expect(list.tail.next).to.equal(null);
    expect(list.tail.prev).to.equal(null);
  });

  it('should remove the head node from the list', () => {
    list.addToHead(1);
    list.addToHead(2);
    const popped = list.removeHead();
    expect(popped.value).to.equal(2);
    expect(list.head.value).to.equal(1);
    expect(list.head.next).to.equal(null);
    expect(list.head.prev).to.equal(null);
    expect(list.tail.value).to.equal(1);
    expect(list.tail.next).to.equal(null);
    expect(list.tail.prev).to.equal(null);
  });

  it('should add a node to the tail of the list', () => {
    list.addToTail(1);
    list.addToTail(2);
    console.log(list, 'list after 2 adds');
    expect(list.head.value).to.equal(1);
    expect(list.head.next.value).to.equal(2);
    expect(list.head.prev).to.equal(null);
    expect(list.tail.value).to.equal(2);
    expect(list.tail.next).to.equal(null);
    expect(list.tail.prev.value).to.equal(1);
    list.addToTail(3);
    expect(list.tail.value).to.equal(3);
  });

  it('should remove the tail node from the list', () => {
    list.addToTail(1);
    expect(list.head.value).to.equal(1);
    expect(list.tail.value).to.equal(1);
    list.addToTail(2);
    const popped = list.removeTail();
    expect(popped.value).to.equal(2);
    expect(popped.prev).to.equal(null);
    expect(list.tail.value).to.equal(1);
    expect(list.tail.next).to.equal(null);
  });

  it('should check if a value exists in the list', () => {
    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(3);
    expect(list.contains(1)).to.equal(true);
    expect(list.contains(2)).to.equal(true);
    expect(list.contains(3)).to.equal(true);
    expect(list.contains(4)).to.equal(false);
  });

  it('should have methods named "addToTail", "removeHead", "contains", "addToHead", and "removeTail', function () {
    expect(list.addToTail).to.be.a('function');
    expect(list.removeHead).to.be.a('function');
    expect(list.contains).to.be.a('function');
    expect(list.addToHead).to.be.a('function');
    expect(list.removeTail).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function () {
    list.addToTail(4);

    expect(list.tail.value).to.equal(4);
    list.addToTail(5);
    expect(list.head.value).to.equal(4);
    expect(list.tail.value).to.equal(5);
  });

  it('should designate a new head when new nodes are added', function () {
    list.addToHead(2);
    expect(list.head.value).to.equal(2);
  });
});
