// const n1 = {
//     data: 100
// }
// const n2 = {
//     data: 200
// }
// n1.next = n2

// console.log(n1)

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

// const n1 = new Node(100)
// console.log(n1)

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  //insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head)
  }
  //insert last node
  insertLast(data){
      let Node = new Node(data)
      let cur
      if(!this.head){
          this.head - node

      }else{
          
      }

  }

  //insert at index

  //get at index

  //remove at index

  //clear list

  //print list data
  printListData(){
      let cur = this.head
      while(cur){
          console.log(cur.data)
          cur = cur.next
      }
  }

}

const ll = new LinkedList()
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertFirst(400)

ll.printListData()



console.log(ll)
