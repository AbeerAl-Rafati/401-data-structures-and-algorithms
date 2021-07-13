
const AnimalShelter = require('../stack-queue-animal-shelter');


describe('AnimalShelter test', () => {
  it('enqueue test', () => {
    const qu1 = new AnimalShelter();
    qu1.enqueueShelter('cat')
    expect(qu1.head.value).toEqual('cat')
    qu1.enqueueShelter('dog')
    expect(qu1.head.value).toEqual('cat')

    qu1.enqueueShelter('somethingelse')
    expect(qu1.head.value).toEqual('add only cat or dog')

  })

  it('dequeue test', () => {
    const qu1 = new AnimalShelter();
    qu1.enqueueShelter('cat')
    qu1.enqueueShelter('dog')

    expect(qu1.dequeueShelter('cat')).toEqual('cat')
    expect(qu1.dequeueShelter('dog')).toEqual('dog')
    expect(qu1.dequeueShelter('anythingelse')).toEqual(null)

  })

})