
const PseudoQueue = require('../pseudo-queue');


describe('psedoqueue test', () => {
  it('enqueue test', () => {
    const qu1 = new PseudoQueue();
    qu1.enqueue(1)
    qu1.enqueue(2)
    qu1.enqueue(3)

    expect(qu1.stack1.head.value).toEqual(3)
    expect(qu1.stack1.head.next.value).toEqual(2)

  })

  it('dequeue test', () => {
    const qu1 = new PseudoQueue();
    qu1.enqueue(1)
    qu1.enqueue(2)
    qu1.enqueue(3)

    console.log('qu1', qu1);
    expect(qu1.dequeue()).toEqual(1)
    console.log('qu2', qu1);
    expect(qu1.dequeue()).toEqual(2)
    console.log('qu3', qu1);
  })

})