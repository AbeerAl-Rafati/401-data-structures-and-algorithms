let fizzBuzzTree = (tree) => {
  if (!tree.root) return null;

  let replace = (node) => {
    if (node.value) {
      if (!node.value % 3 === 0 || !node.value % 5 === 0) {
        node.value = `"${node.value}"`;
      } else if (node.value % 3 === 0 && node.value % 5 === 0) {
        node.value = "fizzbuzz";
      } else if (node.value % 3 === 0) {
        node.value = "fizz";
      } else if (node.value % 5 === 0) {
        node.value = "buzz";
      }
    }
  };

  if (node.left) {
    replace(node.left);
  }
  if (node.right) {
    replace(node.right);
  }

  replace(tree.root);
  return tree;
};

module.exports = {
  fizzBuzzTree,
};
