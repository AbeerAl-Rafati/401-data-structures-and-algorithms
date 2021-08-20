const HashTable = require("./hashImplement");

function leftJoin(map1, map2) {
  let arr = [];

  for (let i = 0; i < map1.keyMap.length; i++) {
    if (map2.contains(map1.keyMap[i])) {
      let key = map1.keyMap[i];

      arr[arr.length] = [
        map1.keyMap[i],
        map1.get(key).value,
        map2.get(key).value,
      ];
    } else {
      let key = map1.keyMap[i];
      arr[arr.length] = [map1.keyMap[i], map1.get(key).value, "Null"];
    }
    return arr;
  }

  return arr;
}

module.exports = leftJoin;
