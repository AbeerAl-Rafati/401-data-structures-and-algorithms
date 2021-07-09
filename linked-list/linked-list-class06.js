'use strict';

const Node = require('./node');


class SinglyLinkedList06 {
  constructor() {
    this.head = null;

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




  insertBefore(value, newValue) {


    if (!this.head) {
      let node = new Node(value);
      this.head = node;

    } else {
      let newNode = new Node(newValue)

      if (this.head === value) {
        newNode.next = this.head

        this.head = newNode
      }
      else {
        let pointer = this.head;
        while (pointer) {

          if (pointer.next.value === value) {
            newNode.next = pointer.next
            pointer.next = newNode;
            return;
          } else {
            pointer = pointer.next

          }
        }
      }

    }

  }





  insertAfter(value, newValue) {

    if (!this.head) {
      let node = new Node(value);
      this.head = node;

    } else {
      let newNode = new Node(newValue)

      if (this.head === value) {
        this.head.next = newNode

      }
      else {
        let pointer = this.head;
        while (pointer) {

          if (pointer.next.value === value) {
            pointer.next.next = newNode
            return;
          } else {
            pointer = pointer.next

          }
        }
      }

    }
  }

}


let test6 = new SinglyLinkedList06();
test6.append(1)
test6.append(3)
test6.insertBefore(3, 2)
// test6.insertAfter(3)
console.log(test6);

module.exports = SinglyLinkedList06;
