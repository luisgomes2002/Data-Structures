class BinarySearch {
  find(array, target) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
      let middle = Math.floor(low + (high - low) / 2);
      let value = array[middle];

      if (value < target) low = middle + 1;
      else if (value > target) high = middle - 1;
      else return middle;
    }

    return -1;
  }
}

let array = [];
for (let i = 0; i < 1000; i++) {
  array[i] = i;
}

let binarySearch = new BinarySearch();

console.log(binarySearch.find(array, 42));
