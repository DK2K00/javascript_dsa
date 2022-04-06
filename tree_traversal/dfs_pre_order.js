//Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//BST class
class BST {
  constructor() {
    this.root = null;
  }

  //Method to insert a node into BST
  insert(value) {
    let newNode = new Node(value);

    //Checking if tree exists
    if (this.root === null) {
      this.root = newNode;
      console.log("Node is the root");
      console.log(this);
      return this;
    }

    let current = this.root;

    //Continuously traversing
    while (true) {
      //Checking if value repeats
      if (value === current.value) {
        console.log(value, " is repeated");
        return undefined;
      }

      //If value is less than parent go left
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          console.log("Inserted node at the left");
          console.log(this);
          return this;
        }
        current = current.left;
        //Else go right
      } else {
        if (current.right === null) {
          current.right = newNode;
          console.log("Inserted node at the right");
          console.log(this);
          return this;
        }
        current = current.right;
      }
    }
  }

  //Returning node after searching
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  //Checking if node exists inside tree
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  //Performing DFS in pre order form
  DFS_PreOrder() {
    //Setting the starting node. Here it is the root
    let node = this.root;
    let data = [];

    //Helper function for recursion
    function traverse(node) {
      data.push(node.value);
      //Checking for child nodes
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    //Calling recursively
    traverse(node);
    console.log(data);
    return data;
  }
}

let tree = new BST();
tree.insert(20);
tree.insert(32);
tree.insert(16);
tree.insert(18);
tree.insert(30);
tree.find(30);
tree.contains(32);
tree.DFS_PreOrder();
