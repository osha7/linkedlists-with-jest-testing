// write test before writing code
// this is where we'll write all of our testing code for our Linked List library

// automated testing

const LinkedList = require('./LinkedList')

//jest gives us the ability to write tests and write blocks around them

//describe block: describes the thing we are working on / thing we are testing
// perform a test on a method of class
describe('#prepend', () => {
    test('it adds the element to the beginning of the list', () => {
        const ll = new LinkedList()
        ll.prepend(10)
        const oldHead = ll.head // make sure you are overwriting your old head value with new head value
        ll.prepend(20)

        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)
    })
})

// describe the ability to get an element from an index
describe('#getByIndex', () => {
    describe('with index less than 0', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10, 20)

            expect(ll.getByIndex(-1)).toBeNull()
        })
    })

    // trying to find element at index that is greater than length of our array
    describe('with index greater than list length', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10, 20)

            expect(ll.getByIndex(5)).toBeNull()
        })
    })

    //what happens when we try to get very first element in our array:
    describe('with index 0', () => {
        test('it returns the head', () => {
            const ll = LinkedList.fromValues(10, 20)

            expect(ll.getByIndex(0).value).toBe(10)
        })
    })

    //get a particular index in the middle
    describe('with index in the middle', () => {
        test('it returns the element at that index', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40)

            expect(ll.getByIndex(2).value).toBe(30)
        })
    })
})

describe ('#insertAtIndex', () => {
    describe('with index less than 0', () => {
        test('it does not insert anything', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.insertAtIndex(-1, 30)
            
            expect(ll.length).toBe(2)
        })
    })

    // trying to find element at index that is greater than length of our array
    describe('with index greater than list length', () => {
        test('it does not insert anything', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.insertAtIndex(5, 30)
            
            expect(ll.length).toBe(2)
        })
    })

    //what happens when we try to get very first element in our array:
    describe('with index 0', () => {
        test('it should insert at the head', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.insertAtIndex(0, 30)
            
            expect(ll.head.value).toBe(30)
            expect(ll.head.next.value).toBe(10)
            expect(ll.length).toBe(3)
        })
    })

    //get a particular index in the middle
    describe('with index in the middle', () => {
        test('it should insert at the given index', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40)
            ll.insertAtIndex(2, 50)
            const node = ll.getByIndex(2)
            
            expect(node.value).toBe(50)
            expect(node.next.value).toBe(30)
            expect(ll.length).toBe(5)
        })
    })
})

describe('#removeAtHead', () => {
    test('removes the head', () => {
        const ll = LinkedList.fromValues(10, 20, 30)
        ll.removeHead()
        
        expect(ll.head.value).toBe(20)
        expect(ll.length).toBe(2)
    })
})