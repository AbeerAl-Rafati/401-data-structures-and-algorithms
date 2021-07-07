'use strict';

const Node = require('./node');


class SinglyLinkedList08 {
  constructor() {
    this.head = null;

  }


  insert(value) {

    this.head = new Node(value, this.head);

  }

  zip(list1, list2) {

    let list3 = new Node('')
    let tail = list3
    let prv


    while (list1 || list2) {
      if (list1 !== null) tail.val += list1.val
      if (list2 !== null) tail.val += list2.val

      tail.next = new Node('')
      prv = tail
      tail = tail.next

      list1 == list1 ? list1.next : list1
      list2 == list2 ? list2.next : list2
    }
    prv.next = null
    return list3;
  }

}

module.exports = SinglyLinkedList08;
