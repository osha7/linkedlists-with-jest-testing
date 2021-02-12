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

    getByIndex(index) {
        //slower function than if we did this with arrays

        if (index < 0 || index >= this.length) return null

        let current = this.head // always have to start at head and move forward till we get value we want
        for (let i = 0; i < index; i++) {//starting at 0 which is our head
            current = current.next
        }
        return current
    }

    insertAtIndex(index, value) {
        if (index === 0) return this.prepend(value)

        const prev = this.getByIndex(index - 1)
        if (prev === null) return null

        // take prev.next and set it to new node
        prev.next = new LinkedListNode(value, prev.next)
        this.length++
    }

    //helper function / loop through and print our linked list - more readable
    print() {
        let output = ''
        let current = this.head
        while (current) {
            output = `${output}${current.value} -> `
            current = current.next
        }
        console.log(`${output}null`)
    }
}

class LinkedListNode {
    // for each one of our elements (nodes) & reference to next node
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

// simple helper function on our linked list that allows us to create a linked list from an array of values:
LinkedList.fromValues = function(...values ) {
    const ll = new LinkedList()

    //loop over these values in reverse order
    for (let i = values.length - 1; i >= 0; i--) {
        ll.prepend(values[i])
    }
    return ll
}

module.exports = LinkedList