const HashTable = require("./hashImplement");

function leftJoin(map1, map2) {

let arr = []

 for(let i = 0 ; i < map1.keyMap.length; i++){

  if (map1.keyMap[i] !== undefined){
    let key = (Object.keys(map1.keyMap[i][key])[0])

    arr.push(key)
    arr.push(map1.keyMap[i][key])

    if(map2.contains(key)){
      arr.push(map2.get(key))
    }else{
      arr.push(null)
    }

  }
 }

 return arr;
}
