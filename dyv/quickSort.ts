export function quickSort(array: number[], inf: number, sup: number): void {
  //caso base
  console.log(JSON.stringify(array), inf, sup);
  if (inf < sup) {
    let piv = split(array, inf, sup);
    quickSort(array, inf, piv - 1);
    quickSort(array, piv + 1, sup);
  }
}

function split(array: number[], inf: number, sup: number): number {
  let splitIndex = inf;
  let pivot = array[sup];
  for (let i = inf; i < sup; i++) {
    if (array[i] < pivot) {
      swap(array, splitIndex, i);
      splitIndex++;
    }
  }
  swap(array, splitIndex, sup);
  return splitIndex;
}

function swap(array, i, j): void {
  let aux = array[i];
  array[i] = array[j];
  array[j] = aux;
}

// var array: number[] = [4, 2, 7, 3, 5, 1, 9];
// var array: number[] = [4, 2, 1, 5, 3];
var array: number[] = [3, 17, 1, 21, 7, 5, 9, 8, 2, 14];

console.log(JSON.stringify(array));
quickSort(array, 0, array.length - 1);
console.log(JSON.stringify(array));
