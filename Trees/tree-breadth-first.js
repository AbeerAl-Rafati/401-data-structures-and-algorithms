const { Node, BT } = require("../Tree");
const { BT } = require("./Tree");

let BT = new BT();

let breadthFirst = (tree) => {
  let node = tree.root;
  let data = [];
  let queue = [];
  queue.push(node.value);
  while (queue.length) {
    node = queue.shift();
    data.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return data;
};

module.exports = { breadthFirst };
