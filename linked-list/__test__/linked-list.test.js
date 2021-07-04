'use strict';

const linkedList = require('../linked-list');



describe('linked-list', () => {
  it('initial test', () => {
    const ll = new linkedList();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
});

describe('insert test', () => {

  it(' adding value to the list', () => {
    const ll = new linkedList();
    ll.insert('any value');
    ll.insert('another value');
    expect(ll.head.value).toEqual('another value');
    expect(ll.head.next.value).toEqual('any value');
  });
});


describe('include test', () => {
  it('check if list includes a value', () => {
    const ll = new linkedList();
    ll.insert('any value') ?
      expect(ll.includes('any value')).toBeTruthy() : null
    // expect(!ll.includes('any')).toBeFalsy();
  })

})


describe('toString test', () => {
  it('string include all list nodes', () => {
    const ll = new linkedList;
    ll.insert('x');
    ll.insert('y');
    expect(ll.toString()).toEqual("{ 'y' } -> { 'x' } -> null");
  });
});