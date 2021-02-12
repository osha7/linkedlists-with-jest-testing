// // write code to work with Linked List, and print it out
// // to do manual testing

// const LinkedList = require('./LinkedList')

// // create new linkedlist: (starts empty)
// const ll = new LinkedList()
// // console.log(ll)

// //  ===> return value:
// // LinkedList { head: null, length: 0 }

// ll.prepend(10) // add 1 element(node) with value of 10

// // console.log(ll)
// //  ===> return value:
// // LinkedList {
// //     head: LinkedListNode { value: 10, next: null },
// //     length: 1
// // }

// ll.prepend(20) // add 2nd element(node) with value of 20

// console.log(ll)

// //  ===> return value:
// // LinkedList {
// //     head: LinkedListNode {
// //       value: 20,
// //       next: LinkedListNode { value: 10, next: null } //node with next value of null is the Tail
// //     },
// //     length: 2
// //   }

// ------------------------------------------------------------------------

const LinkedList = require('./LinkedList')

const ll = LinkedList.fromValues(10, 20, 30, 40, 50)
console.log(ll)
ll.print() // ===>  10 -> 20 -> 30 -> 40 -> 50 -> null

console.log(ll.getByIndex(2).value)   // ====> 30