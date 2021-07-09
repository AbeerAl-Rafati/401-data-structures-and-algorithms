'use strict';

const Node = require('./node');



class SinglyLinkedList08 {
  constructor() {
    this.head = null;

  }

  insert(value) {

    // this.head = new Node(value, this.head);
    let node = new Node();
    node.value = value;
    node.next = this.head;
    this.head = node;

  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;

    } else {
      let thisNode = this.head;
      while (thisNode.next) {
        thisNode = thisNode.next;
      }
      thisNode.next = newNode;

    }

  }

}


let zip = (list1, list2) => {
  let list3 = new SinglyLinkedList08()
  let pointer1 = list1.head;
  let pointer2 = list2.head;

  while (pointer1 || pointer2) {
    if (pointer1) { list3.insert(pointer1.value); pointer1 = pointer1.next }
    if (pointer2) { list3.insert(pointer2.value); pointer2 = pointer2.next }

    // if (pointer1) { list3.append(pointer1.value); pointer1 = pointer1.next }
    // if (pointer2) { list3.append(pointer2.value); pointer2 = pointer2.next }
  }
  return list3;

}

let ll1 = new SinglyLinkedList08();
let ll2 = new SinglyLinkedList08();

ll1.insert(1)
ll1.insert(3)
ll1.insert(5)
ll2.insert(2)
ll2.insert(4)
ll2.insert(6)


console.log(zip(ll2, ll1));
console.log(zip(ll2, ll1).head.value);
console.log(zip(ll2, ll1).head.next.value);
console.log(zip(ll2, ll1).head.next.next.value);
console.log(zip(ll2, ll1).head.next.next.next.value);
console.log(zip(ll2, ll1).head.next.next.next.next.value);
console.log(zip(ll2, ll1).head.next.next.next.next.next.value);




module.exports = {
  SinglyLinkedList08,
  zip
}
