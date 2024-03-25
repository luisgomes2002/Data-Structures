class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
    }
    this.size++;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  insertAt(data, index) {
    if (index < 0 || index >= this.size) return;

    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let count = 0;
      let current = this.head;
      let previous = null;
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      newNode.next = current;
      previous.next = newNode;
      newNode.prev = previous;
    }
    this.size++;
  }

  removeAt(data) {
    if (this.head == null) return;

    let current = this.head;
    let previous = null;

    if (current.data == data) {
      this.head = current.next;
      this.size--;
    }

    while (current != null && current.data !== data) {
      previous = current;
      current = current.next;
    }

    if (current != null) {
      current.next.prev = previous;
      previous.next = current.next;
      this.size--;
    }
  }

  print() {
    let current = this.head;
    let result = "LinkedList: ";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }

  printOneNode(index) {
    if (index < 0 || index >= this.size) return;
    let count = 0;
    let current = this.head;

    while (count < index) {
      current = current.next;
      count++;
    }

    let prevData = current.prev ? current.prev.data : "null";
    let nextData = current.next ? current.next.data : "null";
    console.log(`Nó: ${prevData} <- ${current.data} -> ${nextData}`);
  }
}

const linkedList = new LinkedList();
console.log(linkedList.isEmpty());
console.log(linkedList.getSize());
linkedList.add(2);
// console.log(linkedList);
linkedList.add(3);
// console.log(linkedList);
linkedList.add(4);
linkedList.add(20);
linkedList.add(10);
linkedList.print();
linkedList.removeAt(4);
// console.log(linkedList);
linkedList.insertAt(1, 1);
console.log(linkedList.getSize());
linkedList.print();
linkedList.printOneNode(2);
