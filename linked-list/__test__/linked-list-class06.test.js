'use strict';


const linkedList06 = require('../linked-list-class06');



describe('linked-list06', () => {
  it('initial test', () => {
    const ll = new linkedList06();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
});

describe('append test', () => {
  it(' add value in tail', () => {
    const ll = new linkedList06();

    ll.append(2);
    ll.append(3)

    expect(ll.head.value).toEqual(2);
    expect(ll.head.next.value).toEqual(3);
  });

});


describe('insert before test', () => {
  it('before', () => {
    const ll = new linkedList06();

    ll.append(1)
    ll.append(3)
    ll.insertBefore(3, 2)

    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(2)
  });

})


describe('insert after test', () => {
  it('after', () => {
    const ll = new linkedList06();

    ll.append(1)
    ll.append(2)
    ll.insertAfter(2, 3)

    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(2)
    expect(ll.head.next.next.value).toEqual(3)
  });

});