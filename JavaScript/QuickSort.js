// quick sort = moves smoller elements to left of a pivot.
//             recursicely divide array in 2 partitions

// run-time  complexity = Best case O(n log(n))
//                        Average case O(n log(n))
//                        Worst case O(n^2) if alredy sorted

// space complaxity = O(log(n)) due to recursion

let array = [8, 2, 4, 7, 1, 3, 9, 6, 5];
let temp;

const quickSort = (array, start, end) => {
  if (end <= start) return;

  let pivot = partition(array, start, end);
  quickSort(array, start, pivot - 1);
  quickSort(array, pivot + 1, end);
};

const partition = (array, start, end) => {
  let pivot = array[end];
  let i = start - 1;

  for (let j = start; j <= end - 1; j++) {
    if (array[j] < pivot) {
      i++;
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  i++;
  temp = array[i];
  array[i] = array[end];
  array[end] = temp;

  return i;
};

quickSort(array, 0, array.length - 1);
array.push();
console.log(`Finish: ${array}`);
