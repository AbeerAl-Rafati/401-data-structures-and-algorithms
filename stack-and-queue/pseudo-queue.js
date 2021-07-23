const Stack = require("./stack");

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    while (this.stack1.head !== null) {
      let removedItem = this.stack1.pop(); //remove last in
      this.stack2.push(removedItem);
      // this.stack1.head = this.stack1.head.next;
    }
    return this.stack2.pop();
  }

  includes(value) {
    let checkingValue = this.stack1.head;
    while (checkingValue) {
      return checkingValue === value
        ? true
        : (checkingValue = checkingValue.next);
    }
    return false;
  }
}

module.exports = PseudoQueue;

// let qu1 = new PseudoQueue();
// qu1.enqueue(1)
// qu1.enqueue(2)
// qu1.enqueue(3)

// console.log(qu1);
// console.log(qu1.head);

// qu1.dequeue() // remove 3 , add it to stack2 { 3 }
// qu1.dequeue() // remove 2 , add it to stack2 { 2 ,3  }
// qu1.dequeue() // remove 1 , add it to stack2 { 1 ,2 ,3  }
