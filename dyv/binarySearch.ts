function binarySearch(
  array: number[],
  element: number,
  inf: number,
  sup: number
): number {
  if (inf < sup) {
    let splitIndex = Math.round((inf + sup) / 2);
    if (array[splitIndex] === element) {
      return splitIndex;
    } else if (array[splitIndex] > element) {
      return binarySearch(array, element, inf, splitIndex - 1);
    } else {
      return binarySearch(array, element, splitIndex + 1, sup);
    }
  } else return -1;
}

function printIndex(array: number[]) {
  let indexes: string = "[";
  array.forEach((element, index) => {
    indexes += index + ",";
  });
  console.log(indexes.slice(0, indexes.length - 1) + "]");
}

var array: number[] = [1, 3, 4, 5, 6, 8, 9, 11, 12, 13, 16];
var num: number = 3;

console.log(num, "?");

printIndex(array);
console.log(JSON.stringify(array));

console.log(binarySearch(array, 3, 0, array.length - 1));
