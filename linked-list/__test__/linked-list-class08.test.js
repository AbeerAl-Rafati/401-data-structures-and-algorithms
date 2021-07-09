'use strict';


let { SinglyLinkedList08, zip } = require('../linked-list-class08');



describe('linked-list08', () => {
  it('initial test', () => {
    const ll = new SinglyLinkedList08();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });



  it('test zip ', () => {
    let ll = new SinglyLinkedList08();
    let ll2 = new SinglyLinkedList08();


    ll.insert(1);
    ll.insert(3);
    ll.insert(5);


    ll2.insert(2);
    ll2.insert(4);
    ll2.insert(6);


    expect(zip(ll2, ll).head.value).toEqual(1);
    expect(zip(ll2, ll).head.next.value).toEqual(2);
    expect(zip(ll2, ll).head.next.next.value).toEqual(3);



  })


});