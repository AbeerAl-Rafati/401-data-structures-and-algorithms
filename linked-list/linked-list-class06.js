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
      this.head = new Node(newValue);
    } else {
      let currentNode = this.head;
      let afterNode = null;
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          afterNode = currentNode.next;
          let newNode = new Node(newValue);
          newNode.next = afterNode;
          currentNode.next = newNode;
          return;
        }
        currentNode = currentNode.next;
      }
    }
    return this;

  }




  insertAfter(value, newValue) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    }
    let currentNode = this.head;
    let afterNode = null;
    while (currentNode) {
      if (currentNode.value === value) {
        afterNode = currentNode.next;
        let newNode = new Node(newValue);
        newNode.next = afterNode;
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }
    return this;

  }
}


module.exports = SinglyLinkedList06;
