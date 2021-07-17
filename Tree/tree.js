class Node {
  constructor(value, L = null, R = null) {
    this.value = value;
    this.left = L;
    this.right = R;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    const arr = [];
    function traverse(node) {
      arr.push(node.value);

      node.left ? traverse(node.left) : null;
      node.right ? traverse(node.right) : null;
    }

    traverse(this.root);
    return arr;
  }

  inOrder() {
    const arr = [];
    function traverse(node) {
      node.left ? traverse(node.left) : null;

      arr.push(node.value);

      node.right ? traverse(node.right) : null;
    }

    traverse(this.root);
    return arr;
  }

  postOrder() {
    const arr = [];
    function traverse(node) {
      node.left ? traverse(node.left) : null;
      node.right ? traverse(node.right) : null;

      arr.push(node.value);
    }

    traverse(this.root);
    return arr;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    let node = new Node(value);

    !this.root ? (this.root = node) : null;

    add(this.root, node);
  }

  contains(value) {
    let root = this.root;

    if (root) {
      while (root) {
        return value === this.root.value
          ? true
          : value < this.root.value
          ? (root = root.left)
          : value > root.value
          ? (root = root.right)
          : false;
      }
    }
  }
}
