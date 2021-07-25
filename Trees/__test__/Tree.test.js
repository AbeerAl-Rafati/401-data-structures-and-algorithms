const { Node, BT, BST } = require("../Tree");

describe("Tree test", () => {
  let tree;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    one.left = two;
    one.right = three;
    two.left = six;
    three.left = four;
    three.right = five;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new BT(one);
  });

  it("empty tree", () => {
    let tree = new BT();
    expect(tree).toBeInstanceOf(BT);
  });

  it("instantiate a tree with a single root node", () => {
    let node = new Node(5);
    let tree = new BT();
    tree.root = node;

    expect(tree.root.value).toEqual(5);
    expect(tree.root.right).toBeNull;
    expect(tree.root.left).toBeNull;
  });

  it("add a left child and right child to a single root node", () => {
    let tree = new BST();
    tree.add(7);
    tree.add(11);
    tree.add(3);

    expect(tree.root.value).toEqual(7);
    expect(tree.root.right.value).toEqual(11);
    expect(tree.root.left.value).toEqual(3);
  });

  it("preorder traversal", () => {
    expect(tree.preOrder()).toEqual([1, 2, 6, 7, 8, 9, 3, 4, 5]);
  });

  it("postorder traversal", () => {
    expect(tree.postOrder()).toEqual([8, 9, 7, 6, 2, 4, 5, 3, 1]);
  });

  it("inorder rder traversal", () => {
    expect(tree.inOrder()).toEqual([6, 8, 7, 9, 2, 1, 4, 3, 5]);
  });
});
