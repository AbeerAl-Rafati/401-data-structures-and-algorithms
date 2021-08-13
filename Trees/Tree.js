class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BT {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    let arr = [];

    let traverse = (node) => {
      arr.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);

    return arr;
  }

  postOrder() {
    let arr = [];

    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      arr.push(node.value);
    };
    traverse(this.root);

    return arr;
  }

  inOrder() {
    let arr = [];

    let traverse = (node) => {
      if (node.left) traverse(node.left);

      arr.push(node.value);

      if (node.right) traverse(node.right);
    };
    traverse(this.root);

    return arr;
  }

  maxBT(node) {
    if (!node) {
      return null;
    } else {
      let pointer = node.value;

      let leftMax = this.maxBT(node.left);
      let rightMax = this.maxBT(node.right);

      if (leftMax > pointer) {
        pointer = leftMax;
      }
      if (rightMax > pointer) {
        pointer = rightMax;
      }
      return pointer;
    }
  }

  contains(value) {
    if (!this.root) {
      return false;
    }

    let root = this.root;
    let found = false;

    while (root && !found) {
      if (value < root.left) {
        root = root.left;
      } else if (value > root.right) {
        root = root.right;
      } else {
        return true;
      }
    }
    return false;
  }



  BFS=()=>{
    let visitedData=[], queue = [] ,pointer = this.root;
    queue.push(pointer);

    while(queue.length){
//            console.log(queue)
        pointer = queue.shift();

        visitedData.push(pointer.value);
        if (pointer.left){queue.push(pointer.left)}
        if (pointer.right){queue.push(pointer.right)}
    }
  return visitedData;
} 
}

class BST {
  constructor() {
    this.root = null;
  }

  add(value) {
    let node = new Node(value);

    if (!this.root) {
      this.root = node;
    } else {
      let root = this.root;
      while (true) {
        if (value === root.value) return undefined;
        if (value < root.value) {
          if (!root.left) {
            root.left = node;
          } else {
            root = root.left;
          }
        } else if (value > root.value) {
          if (!root.right) {
            root.right = node;
          } else {
            root = root.right;
          }
        }
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return false;
    }

    let root = this.root;
    let found = false;

    while (root && !found) {
      if (value < root.left) {
        root = root.left;
      } else if (value > root.right) {
        root = root.right;
      } else {
        return true;
      }
    }
    return false;
  }

  maxBST = () => {
    if (!this.root) {
      return null;
    } else {
      let pointer = this.root;

      while (pointer.right !== null) {
        pointer = pointer.right;
      }
      return pointer.value;
    }
  };
}


module.exports = { Node, BT, BST };

let bts = new BST();

bts.add(15);
bts.add(5);
bts.add(3);
bts.add(60);
bts.add(35);
bts.add(20);

// console.log(bts);



// console.log(result);
// console.log(result.root);
// console.log(result.root.left);
// console.log(result.root.right);
