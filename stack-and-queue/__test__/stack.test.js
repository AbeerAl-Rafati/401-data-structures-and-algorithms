'use strict';


const Stack = require('../stack');




describe('stack', () => {

  it(' push to stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.head.value).toEqual(3);
    expect(stack.head.next.value).toEqual(2);
  });

  it(' peek of stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek().value).toEqual(3);
    expect(stack.peek().next.value).toEqual(2);
  });

  it(' pop from the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.head).toEqual(null);



  });

  it('is stack empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
    stack.push(3);
    expect(stack.isEmpty()).toEqual(false);
  });

});

