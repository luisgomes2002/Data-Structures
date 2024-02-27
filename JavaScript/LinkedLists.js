class Node {
  constructor(data) {
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
    if (index < 0 || index > this.size) return;

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
    }
    this.size++;
  }

  removeAt(data) {
    if (this.head == null) return;
    let current = this.head;
    let prev = null;
    if (current.data == data) {
      this.head = current.next;
      this.size--;
    }
    while (current != null && current.data !== data) {
      prev = current;
      current = current.next;
    }

    if (current != null) {
      prev.next = current.next;
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
}

const linkedList = new LinkedList(2);
console.log(linkedList.isEmpty());
console.log(linkedList.getSize());
linkedList.add(2);
console.log(linkedList);
linkedList.add(3);
console.log(linkedList);
linkedList.add(4);
linkedList.add(20);
linkedList.add(10);
linkedList.removeAt(4);
linkedList.insertAt(1, 1);
console.log(linkedList);
console.log(linkedList.getSize());
linkedList.print();
