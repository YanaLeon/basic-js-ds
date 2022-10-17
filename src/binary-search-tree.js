const { NotImplementedError, ListNode } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.base = null;
  }

  root() {
    return this.base;
  }

  add(data) {
    let node = new Node (data);

    if(!this.base) {
      this.base = node;
    }

    let currentNode = this.base;

    while(currentNode) {
      if (node.data > currentNode.data){
         if(!currentNode.right) {
          currentNode.right = node;
          return;
         }
         currentNode = currentNode.right;
      } else if (node.data < currentNode.data) {
        if(!currentNode.left){
          currentNode.left = node;
          return;
        }
        currentNode = currentNode.left;
      } else if (node.data === currentNode.data) {
        return node;
      }
    }
  }

  has(data) {
    let currentNode = this.base;

    if(!this.base) {
      return null;
    }

    while(true){
      if (!currentNode){
        return false;
      }
      if (data === currentNode.data){
        return true;
      }
      if(data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
  }
}

  find(data) {
    let currentNode = this.base;

    if(!this.base) {
      return null;
    }

    while(true){
      if (!currentNode){
        return null;
      } else if (data === currentNode.data){
        return currentNode;
      }

      if(data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
  }
  }

  remove(data) {
    
  }

  min() {
    let currentNode = this.base;
    if(!this.base) {
      return;
    }

    while(currentNode.left){
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.base;
    if(!this.base) {
      return;
    }

    while(currentNode.right){
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};