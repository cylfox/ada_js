function mayoritarioRecursivo(array: number[], inf: number, sup: number) {
  console.log("inf", inf, "sup", sup);

  if (inf === sup) {
    return array[inf];
  } else {
    let m1: number = mayoritarioRecursivo(array, 0, Math.floor(sup / 2));
    let m2: number = mayoritarioRecursivo(array, Math.floor(sup / 2) + 1, sup);

    if (frequencia(array, m1) > array.length / 2) {
      return m1;
    } else if (frequencia(array, m2) > array.length / 2) {
      return m2;
    } else {
      return -1;
    }
  }
}

function frequencia(array: number[], n: number): number {
  let freq = 0;
  array.forEach((element) => {
    if (element == n) freq++;
  });
  console.log("freq", n, freq);

  return freq;
}

let a: number[] = [1, 1, 3, 3, 3, 1, 1];

// console.log(mayoritarioRecursivo(a, 0, a.length - 1));

// ==========================================================================
// hacer quicksort para ordenarlo
import { quickSort } from "../dyv/quickSort";

function contieneElementoMayoritario(array: number[]): boolean {
  if (array[0] === array[array.length - 1]) {
    // Todos los elementos son el mismo
    return true;
  }
  let mitad = Math.floor((array.length - 1) / 2);
  console.log("mitad", mitad);

  for (let i = mitad; i < array.length; i++) {
    console.log(
      "i",
      i,
      "array[i]",
      array[i],
      "i - mitad",
      i - mitad,
      "array[i - mitad]",
      array[i - mitad]
    );

    if (array[i] === array[i - mitad]) return true;
  }
  return false;
}

// quickSort(a, 0, a.length - 1);
// console.log(a);

// console.log(
//   contieneElementoMayoritario(a) ? a[Math.floor(a.length - 1 / 2)] : false
// );

// ==========================================================================
// https://antmarakis.github.io/divide%20and%20conquer/dnc-majority-element/
function mayoritarioRec(array: number[], inf: number, sup: number): number {
  console.log("i:", inf, "s:", sup);

  if (inf === sup) {
    return array[inf];
  } // 1 elemento
  else if (sup - inf === 1) {
    // 2 elementos
    if (array[inf] === array[sup]) {
      return array[inf];
    } else {
      return -1;
    }
  }
  let m1 = mayoritarioRec(array, inf, Math.floor(sup / 2));
  console.log("M1", m1);

  let m2 = mayoritarioRec(array, Math.floor(sup / 2) + 1, sup);
  console.log("M2", m2);

  if (m1 >= 0 && m2 === -1) {
    return m1;
  } else if (m2 >= 0 && m1 === -1) {
    return m2;
  } else if (m1 === m2) {
    return m1;
  } else {
    return -1;
  }
}

console.log(mayoritarioRec(a, 0, a.length - 1));
