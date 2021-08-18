const Node = require('./node');

class Queue {
  constructor() {
    this.head = null;
    this.back = null;
    this.size=0
  }

  enqueue(value) {

    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.back = node;
      this.size++
    } else {
      this.back.next = node;
      this.back = node;
      this.size++
    }


  }

  dequeue() {
    if (!this.head) { return null; }

    let pointer = this.head;
    this.head = this.head.next;
    this.size--
    return pointer.value;
  }

  peek() {
    if (!this.head) { return null; }

    return this.head;
  }

  isEmpty() {
    if (!this.head) { return true; }

    return false;
  }
}

module.exports = Queue;

// let queue = new Queue();
// queue.enqueue(1)

// console.log(queue);