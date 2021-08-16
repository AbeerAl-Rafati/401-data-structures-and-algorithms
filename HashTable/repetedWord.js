const HashTable = require("./hashImplement");

function repetedWord(str) {
  let hashTable = new HashTable(30);

  let arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(",")) {
      arr[i] = arr[i].slice(0, arr.length - 1);
    }

    if (hashTable.contains(arr[i])) {
      return arr[i];
    }

    hashTable.add(arr[i], arr[i]);
  }
}

module.exports = repetedWord;
