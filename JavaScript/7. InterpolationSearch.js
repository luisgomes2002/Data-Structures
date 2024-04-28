class InterpolationSearch {
  search(array, value) {
    let high = array.length - 1;
    let low = 0;

    while (value >= array[low] && value <= array[high] && low <= high) {
      let probe =
        low +
        ((high - low) * (value - array[low])) / (array[high] - array[low]);

      console.log("Probe: " + probe);

      if ((array[probe] = value)) {
        return probe;
      } else if (array[probe] < value) {
        low = probe + 1;
      } else {
        high = probe - 1;
      }
    }
    return -1;
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let interpolationSearch = new InterpolationSearch();

interpolationSearch.search(array, 8);
