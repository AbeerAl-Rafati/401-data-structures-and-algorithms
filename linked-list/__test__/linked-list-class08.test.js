'use strict';


const linkedList08 = require('../linked-list-class08');



describe('linked-list08', () => {
  it('initial test', () => {
    const ll = new linkedList08();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });



  it('test zip ', () => {
    let ll = new linkedList08();
    let ll2 = new linkedList08();
    let ll3 = new linkedList08();

    ll.insert('1');
    ll.insert('3');
    ll.insert('5');


    ll2.insert('2');
    ll2.insert('4');
    ll2.insert('6');


    ll3.zip(ll, ll2);

    expect(ll3.head.value).toEqual('1');
    expect(ll3.head.next.value).toEqual('2');



  })


});