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
}

module.exports = { BT, BST };
