class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    if (this.items.length == 0) {
      this.items[this.items.length] = item;
    } else {
      for (let i = this.items.length - 1; i >= 0; i--) {
        this.items[i + 1] = this.items[i];
      }
      this.items[0] = item;
    }
  }

  pop(item) {
    for (let i = 0; i <= this.items.length - 1; i++) {
      this.items[i] = this.items[i + 1];
    }
    this.items.length = this.items.length - 1; //Exclui o último item do array
  }

  search(item) {
    for (let i = 0; i <= this.items.length - 1; i++) {
      if (item == this.items[i]) return i + 1;
    }
  }

  peek() {
    return this.items[0];
  }

  empty() {
    return this.items.length == 0;
  }
}

let stack = new Stack();

console.log("----------------------------");
console.log(stack);
console.log(stack.empty());
stack.push("Luis");
stack.push("Caio");
stack.push("Araujo");
stack.push("Joao");
stack.push("Piero");
stack.push("Lucas");
console.log(stack.items);
console.log(stack.peek());
stack.pop();
console.log(stack.items);
console.log(stack.search("Luis"));
console.log(stack.empty());
console.log("----------------------------");
