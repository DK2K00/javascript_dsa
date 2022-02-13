class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    //Creating new node
    let newNode = new Node(val);

    //Checking if list is empty
    //If so, set head and tail as the new node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //Else add after tail and set it as new tail
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    console.log("Push: ", this);
    return this;
  }

  //Function to remove last element in the list
  pop() {
    //Checking if list exists
    if (!this.head) return undefined;
    let poppedNode = this.tail;

    //If only single element exists
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      //Changing pointers
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    console.log("Pop: ", poppedNode);
    return poppedNode;
  }

  //Function to remove element from beginning of list
  shift() {
    //Checking if empty
    if (this.length === 0) return undefined;
    let oldHead = this.head;

    //Edge case
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      //Setting next element as head and removing previous elements
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    console.log("Shift: ", oldHead);
    return oldHead;
  }

  //Function to add a node to the beginning of the list
  unshift(val) {
    let newNode = new Node(val);
    //If list is empty, setting head and tail as the new node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      //Else adding the new node and changing the pointers
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    console.log("Unshift:", newNode);
    console.log("-------------------------------------");
    console.log(this);
    return this;
  }

  //Function to get value of a particular index
  get(index) {
    //Edge case
    if (index < 0 || index >= this.length) {
      console.log("Invalid index for get");
      return null;
    }
    let count, current;

    //Checking if index is closer to head or tail
    //to maximise efficiency
    if (index < this.length / 2) {
      count = 0;
      current = this.head;
      //Going forward from head
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      //Going backward from tail
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    console.log("Get: ", current);
    return current;
  }

  //Function to change value for particular index
  set(index, val) {
    //Getting the node
    let foundNode = this.get(index);
    //Changing value if found
    if (foundNode != null) {
      foundNode.val = val;
      console.log("Set: ", foundNode);
      return true;
    }
    //Returning false if not found
    console.log("Node not found for set");
    return false;
  }

  //Function to insert a node in the list
  insert(index, val) {
    //Edge cases
    if (index < 0 || index >= this.length) {
      console.log("Invalid index for insert");
      return false;
    }
    if (index === 0) {
      console.log("Node is added at the beginning");
      return !!this.unshift(val);
    }
    if (index === this.length - 1) {
      console.log("Node is added at the end");
      return !!this.push(val);
    }

    //Creating new node
    let newNode = new Node(val);
    //Getting previous and next node of given index
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    //Changing pointers
    newNode.prev = beforeNode;
    beforeNode.next = newNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    console.log("Insert: ", newNode);
    return true;
  }

  //Function to remove node from list
  remove(index) {
    //Edge cases
    if (index < 0 || index >= this.length) {
      console.log("Invalid index for remove");
      return undefined;
    }
    if (index === 0) {
      console.log("Node is removed from the beginning");
      return this.shift();
    }
    if (index === this.length - 1) {
      console.log("Node is removed from the end");
      return this.pop();
    }

    //Getting node to be removed
    let removedNode = this.get(index);
    //Getting previous and next node
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    //Changing pointers
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    console.log("Remove: ", removedNode);
    return removedNode;
  }
}

let list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.pop();
list.unshift(0);
list.shift();
list.push(40);
list.push(50);
list.push(60);
list.get(3);
list.set(2, 30);
list.set(-1, 0);
list.insert(3, 40);
list.insert(-1, 0);
list.remove(5);