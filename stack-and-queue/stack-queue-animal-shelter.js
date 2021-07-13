const Node = require("./node");
const PseudoQueue = require("./pseudo-queue");
const {includes} =require('../linked-list/linked-list')


class AnimalShelter {
  constructor() {
    this.animal = new PseudoQueue();
    
  }

  enqueueShelter(animal) {

    if (animal = "dog") {
      this.animal.enqueue(animal);
    }
    if (animal = "cat") {
      this.animal.enqueue(animal);
    }
    if (animal !== 'dog' || animal !== 'cat'){ return 'add only cat or dog'} 
  }

  dequeueShelter(pref) {

    if (!this.animal.head){ this.animal.enqueue(pref)}

    // if (pref !== 'dog' || pref !== 'cat'){ return null} 
    if (pref === 'dog' || pref === 'cat'){ 
      if( this.animal.includes(pref)){ return pref}
      return null
    }
  }
}

module.exports = AnimalShelter;