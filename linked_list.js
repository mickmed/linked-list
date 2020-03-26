// const node1 = {
//     value:100
// }
// const node2 = {
//     value:1100
// }

// node1.next = node2
// console.log(node1)

class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }
  ///////////////INSERT FIRST///////////////
  insertFirst(value) {
    // console.log(this.head)
    this.head = new Node(value, this.head)
    this.length++
  }

  ////////////////INSERT LAST////////////////
  insertLast(value) {
    const node = new Node(value)
    let cur

    this.head === null ? (this.head = node) : (cur = this.head)
    while (cur.next) {
      cur = cur.next
    }
    cur.next = node
    this.length++
  }

  ///////////INSERT////////////////////
  insertAt(value, index) {
    const node = new Node(value)
    index > this.length && false //edge case - index doesn't exist
   
    if(index === 0){
      // this.head = new Node(value, this.head)
      this.insertFirst(value)
      return true
    }
    let prev
    let cur = this.head
    let count = 0

    while (count < index) {
      prev = cur 
      cur = cur.next 
      count++
    }
    prev.next = node
    node.next = cur
    this.length++
  }

  //////////////GET////////////////////
  getAt(index) {
    let cur = this.head
    let count = 0

    while (cur){
      // console.log(count)
      // if (count === index) {
      //   console.log(cur.value)
      // }
      count === index && console.log(cur.value)
      cur = cur.next
      count++
    }
    return true
  }

  ////////DELETE////////////////////////

  delete(index) {
    if (index > 0 && index > this.length) {
      return
    }

    let cur = this.head
    let prev
    let count = 0
    
    if (index === 0) {
      this.head = cur.next //dumps first one sets new first one to second one
    } else {
      while (count < index) {
        count++
        prev = cur
        cur = cur.next
      }
      prev.next = cur.next
    }
    this.length--
  }


  ////////CLEAR////////

  clearList(){
    this.head=null
    this.length = 0
  }
  ///////////////CONSOLE////////////////////////
  print() {
    let i = this.head
    console.log(this.head)
    while (i) {
      console.log(i.value)
      i = i.next
    }
  }
}

const myList = new LinkedList()
myList.insertFirst(200)
myList.insertFirst("im first")
myList.insertFirst("im even more first")

myList.insertLast("im last")
myList.insertAt(500, 0)
myList.print()

// const node1 = new Node(100)
// console.log(node1)
myList.getAt(2)
// myList.delete(2)
