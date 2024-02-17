class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    if (this.items.length == 0) {
      this.items[0] = item;
    } else {
      this.items[this.items.length] = item;
    }
  }

  peek() {
    return this.items[0];
  }

  dequeue() {
    for (let i = 0; i < this.items.length - 1; i++) {
      this.items[i] = this.items[i + 1];
    }
    this.items.length = this.items.length - 1;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue("Luis");
queue.enqueue("Araujo");
queue.enqueue("Lucas");
console.log(queue);
console.log(queue.peek());
console.log(queue.isEmpty());
queue.dequeue();
console.log(queue);
