'use strict';

const Node = require('./node');


class SinglyLinkedList {
  constructor() {
    this.head = null;
  }



  insert(value) {

    this.head = new Node(value, this.head);

  }

  includes(value) {
    let checkingValue = this.head;
    while (checkingValue) {
      return ((checkingValue === value) ? true : (checkingValue = checkingValue.next))
    }
    return false;
  }




  toString() {
    let checkingValue = this.head;
    let result = "";
    while (checkingValue) {
      result = result + `{'${checkingValue.value}'} -> `;
      checkingValue = checkingValue.next;
    }
    // result = JSON.stringify(result)
    return result += 'null';

  }
}


module.exports = SinglyLinkedList;
