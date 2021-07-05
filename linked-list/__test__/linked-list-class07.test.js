'use strict';


const linkedList07 = require('../linked-list-class07');



describe('linked-list07', () => {
  it('initial test', () => {
    const ll = new linkedList07();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });



  it('kth from the end test ', () => {
    let ll = new linkedList07();

    ll.insert('4');
    ll.insert('5');
    ll.insert('6');

    expect(ll.findKthFromTheEnd(10)).toEqual('Exception');
    expect(ll.findKthFromTheEnd(-1)).toEqual('Exception');
    expect(ll.findKthFromTheEnd(2)).toEqual('6');
    expect(ll.findKthFromTheEnd(1)).toEqual('5');

  })


});