class DynamicArrays {
  constructor(initialCapacity = 5) {
    this.capacity = initialCapacity;
    this.length = 0;
    this.array = new Array(this.capacity);
  }

  add(data) {
    if (this.length >= this.capacity) {
      this.grow();
    }

    this.array[this.length] = data;
    this.length++;
  }

  insert(index, data) {
    if (this.length >= this.capacity) {
      this.grow();
    }

    for (let i = this.length; i > index; i--) {
      this.array[i] = this.array[i - 1];
    }

    this.array[index] = data;
    this.length++;
  }

  delete(data) {
    for (let i = 0; i < this.length; i++) {
      if (this.array[i] == data) {
        for (let j = 0; j < this.length - i - 1; j++) {
          this.array[i + j] = this.array[i + j + 1];
        }
        this.array[this.length - 1] = null;
        this.length--;
        if (this.length <= this.capacity / 3) {
          this.shrink();
        }
        break;
      }
    }
  }

  search(data) {
    for (let i = 0; i < this.length; i++) {
      if (this.array[i] == data) {
        return i;
      }
    }

    return -1;
  }

  grow() {
    let newCapacity = this.capacity * 2;
    let newArray = new Array(newCapacity);

    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.array[i];
    }

    this.capacity = newCapacity;
    this.array = newArray;
  }

  shrink() {
    let newCapacity = this.capacity / 2;
    let newArray = new Array(newCapacity);

    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.array[i];
    }

    this.capacity = newCapacity;
    this.array = newArray;
  }

  isEmpty() {
    return this.length === 0;
  }

  toString() {
    let string = "";

    for (let i = 0; i < this.length; i++) {
      string += this.array[i] + ", ";
    }

    if (string !== "") {
      string = "[" + string.substring(0, string.length - 2) + "]";
    } else {
      string = "[]";
    }

    console.log(string);

    return null;
  }
}

let dynamicArrays = new DynamicArrays();

console.log(dynamicArrays.isEmpty());
dynamicArrays.add("A");
dynamicArrays.add("B");
dynamicArrays.add("C");
dynamicArrays.add("D");
dynamicArrays.add("E");
dynamicArrays.add("F");
dynamicArrays.insert(1, "X");
dynamicArrays.delete("A");
dynamicArrays.delete("B");
dynamicArrays.delete("C");
dynamicArrays.toString();
console.log(dynamicArrays.isEmpty());
console.log(dynamicArrays);
console.log(dynamicArrays.search("D"));
