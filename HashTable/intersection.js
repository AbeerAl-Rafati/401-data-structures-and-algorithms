const HashTable = require("./hashImplement");
const Tree = require("../Trees/Tree");

function interSection(tree1, tree2) {
  let arr1 = tree1.preOrder();
  let arr2 = tree2.preOrder()

  let hashTable = new HashTable(401);

  let arr3 = [];

  for (let i = 0; i < arr1.length; i++) {
    if (hashTable.contains(arr1[i])) {
      hashTable.add(arr1[i], arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (hashTable.contains(arr2[i])) {
      arr3.push(arr2[i]);
    }
  }

  return arr3;
}


module.export = interSection;