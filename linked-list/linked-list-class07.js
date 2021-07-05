'use strict';

const Node = require('./node');


class SinglyLinkedList07 {
  constructor() {
    this.head = null;
    this.size = 0;
  }


  insert(value) {

    this.head = new Node(value, this.head);
    this.size++

  }

  findKthFromTheEnd(k) {
    if (k < 0 || k > this.size) { return 'Exception'; }

    let pointer1 = this.head;
    let pointer2 = this.size - 1 - k
    let idx = 0

    while (pointer1) {
      if (pointer2 === idx) { return pointer1.value; }
      else { pointer1 = pointer1.next; idx++; }
    }

  }

}


let test = new SinglyLinkedList07();
test.insert(1)
test.insert(0)
test.insert(2)
test.insert(3)
test.insert(2)
console.log(test);
console.log(test.findKthFromTheEnd(1));


module.exports = SinglyLinkedList07;
