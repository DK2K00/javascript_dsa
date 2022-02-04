class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SingleyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

let name = new Node("Danush");
name.next = new Node("Kumar");
name.next.next = new Node("Rocks");