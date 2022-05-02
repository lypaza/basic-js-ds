const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  
  constructor(){

    this.rootNode = null;
  }


  root() {
    
    return this.rootNode;
  }

  add(data) {

	  this.rootNode = addNode(this.rootNode, data);

	  function addNode(node, data) {
		  if (!node) {
			  return new Node(data);
		  }

		  if (node.data === data) {
			  return node;
		  }

		  if (data < node.data) {
			  node.left = addNode(node.left, data);
		  } else {
			  node.right = addNode(node.right, data);
		  }

		  return node;
	  }
	}

  has(data) {

    return Search(this.rootNode, data);

    function Search(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ?
      Search(node.left, data) :
      Search(node.right, data);
    }
  }

  find(data) {

    let node = this.rootNode;

    while (node !== null) {
      if (data === node.data) {
        return node;
      } else if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return null;
  }

  remove(data) {

    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {

    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {

    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

  
}

module.exports = {
  BinarySearchTree
};