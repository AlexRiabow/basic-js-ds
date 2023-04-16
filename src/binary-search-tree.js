const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.Root = null;
  }

  root() {
    if (this.Root === null) return null
    else return this.Root
  }

  add(data) {
    function insertNode(node,newNode){
      if (newNode.data < node.data){
        if(node.left === null) node.left = newNode
        else insertNode(node.left,newNode)
      }
      else{
        if(node.right === null) node.right = newNode
        else insertNode(node.right,newNode)
      }
    }

    let newNode = new Node(data);
    if (this.Root === null) this.Root = newNode;
    else {
      insertNode(this.Root,newNode);
    }

  }

  checkNextNode(node,data){
    if (node.data === data) {
      return node
    }
    else {
      if (data < node.data) {
        if (node.left === null) return null
        else return this.checkNextNode(node.left , data)
      }
      else{
        if (node.right === null ) return null
        else return this.checkNextNode(node.right , data)
      }
    }
  }

  has(data) {
    if (this.Root === null) return false
    if (this.Root.data === data) return true
    if (this.checkNextNode(this.Root,data) === null) return false
    else return true
    
  }

  find(data) {
    if (this.Root === null) return null
    if (this.Root.data === data) return this.Root
    else {
      return this.checkNextNode(this.Root,data);
    }
  }

  findMin(node) {
    if (node.left === null) return node.data
    else return this.findMin(node.left)
  }

  removeNode(node,data) {
    if(node === null) return null;
    else if(data < node.data)
    {
        node.left = this.removeNode(node.left, data);
        return node;
    }
    else if(data > node.data)
    {
        node.right = this.removeNode(node.right, data);
        return node;
    }
    else{  
      if (node.left === null && node.right === null) {
        node.data = null;
        return node
      }
      if (node.left === null && node.right !== null){
        node = node.right;
        return node
      }
      if (node.right === null && node.left !== null){
        node = node.left;
        return node
      }
        let aux = this.findMin(node.right);
        node.data = aux;
        node.right = this.removeNode(node.right , aux);
        return node
    }
  }

  remove(data) {
    this.Root = this.removeNode(this.Root, data);
  }

  min() {
    if (this.Root.left === null) return this.Root.data
    else return this.findMin(this.Root.left)
  }

  max() {
    function findMax(node) {
      if (node.right === null) return node.data
      else return findMax(node.right)
    }
    if (this.Root.right === null) return this.Root.data
    else return findMax(this.Root.right)
  }
}

module.exports = {
  BinarySearchTree
};