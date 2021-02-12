// define linked lists 

class LinkedList {
    constructor() {
            // ^^ no parameters - no initial values, defaults to empty linked list
        this.head = null // bc have no head yet
        // ^^ beginning of our linked list
        this.length = 0
        // ^^ so we can keep track of our list length as we add or remove elements (nodes)
    }

    // insertAtHead(data) {
    prepend(value) {    
        // add elements to beginning of list

        //take current head of array and replace it 
        //need new LinkedList that will reference old head
        //create new node:  pass it value and the next element in our array
        const newNode = new LinkedListNode(value, this.head)

        //take current head and set it to node that was just created:
        this.head = newNode

        //add 1 to length because we added a node:
        this.length++

    }
}

class LinkedListNode {
    // for each one of our elements (nodes) & reference to next node
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

module.exports = LinkedList