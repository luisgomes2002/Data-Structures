class LinearSearch {
  findIndex(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == value) {
        return i;
      }
    }

    return -1;
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let linearSearch = new LinearSearch();

console.log(linearSearch.findIndex(array, 6));
