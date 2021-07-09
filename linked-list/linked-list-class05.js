'use strict';

const Node = require('./node');


class SinglyLinkedList {
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

  search(value) {
    // let checkingValue = this.head;
    // while (checkingValue) {
    //   return ((checkingValue === value) ? true : (checkingValue = checkingValue.next))
    // }
    // return false;

    let check = this.head;
    let idx = 0;
    let result;

    while (check.value != value) {
      idx++;
      check = check.next;

      // return check == null ? false : true
    }
    return idx

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
