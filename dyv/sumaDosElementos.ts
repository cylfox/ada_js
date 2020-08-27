function encontrarSumaDosElementos(array: number[], s: number): boolean {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      console.log(array[i], "+", array[j], "=", array[i] + array[j]);
      if (array[i] + array[j] === s) return true;
    }
  }
}

function encontrarSumaDosElementosN(array: number[], s: number): boolean {
  let i: number = 0;
  let j: number = array.length - 1;
  while (i < j) {
    let suma = array[i] + array[j];
    if (suma > s) j--;
    if (suma < s) i++;
    if (suma === s) return true;
  }
  return false;
}

function encontrarSuma2ElementosDyV(array: number[], s: number): boolean {
  return false;
}

let array: number[] = [1, 2, 3, 4, 5, 6];
let s: number = 8;

console.log(encontrarSumaDosElementosN(array, s));
