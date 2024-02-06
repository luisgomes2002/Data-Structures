class HashTable {
  constructor() {
    this.value = {};
    this.length = 0;
    this.size = 0;
  }

  calculeteHash(key) {
    return key.toString().length % this.size;
  }

  add(key, value) {
    const hash = this.calculeteHash(key);
    if (!this.value.hasOwnProperty(hash)) {
      this.value[hash] = {};
    }
    if (!this.value[hash].hasOwnProperty(key)) {
      this.length++;
    }
    this.value[hash][key] = value;
  }

  search(key) {
    const hash = this.calculeteHash(key);
    if (
      this.value.hasOwnProperty(hash) &&
      this.value[hash].hasOwnProperty(key)
    ) {
      return this.value[hash][key];
    } else {
      return null;
    }
  }
}

const ht = new HashTable();

ht.add("Canada", "300");
ht.add("Germany", "100");
ht.add("Italy", "50");

console.log(ht.search("Italy"));
