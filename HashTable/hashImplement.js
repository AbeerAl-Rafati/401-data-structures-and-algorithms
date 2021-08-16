class HashTable {
  constructor(size) {
    this.keyMap = new Array(size);
  }

  hash(key, len) {
    // let total = 0;
    // let prime = 31;
    // for (let i = 0; i < Math.min(key.length, 100); i++) {
    //   let char = key[i];
    //   let value = char.charCodeAt(0) - 96;
    //   total = (total * prime + value) % this.keyMap.length;
    // }
    let total = 0;
    for (let char of key) {
      let value = char.charCodeAt(0) - 96;
      total = (total + value) % len;
    }
    return total;
  }

  add(key, value) {
    let idx = this.hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    this.keyMap[idx].push([key, value]);
  }

  get(key) {
    let idx = this.hash(key);
    if (this.keyMap[idx]) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        if (this.keyMap[idx][i][0] === key) {
          return this.keyMap[idx][i];
        }
      }
    }
    return undefined;
  }

  contains(key) {
    let hash = this.hash(key);
    if (!this.keyMap(hash)) {
      return false;
    }
    return true;
  }
}

let hashTable = new HashTable();

console.log(hashTable.hash("srttttttt", 3));
console.log(hashTable.hash("sst", 4));
console.log(hashTable.hash("rats", 8));
// console.log(hashTable.hash(true, 4));
// console.log(hashTable.hash(1, 10));
console.log(hashTable.add("rstrstsrt", 10));
console.log(hashTable.get('sst'));
console.log(hashTable.get('sst'));





