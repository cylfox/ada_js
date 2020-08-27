function median(array: number[]): number {
  let med = -1;
  if (array.length > 0) {
    let length = (array.length - 1) / 2;
    if (array.length % 2 === 0) {
      let index = Math.floor(length);
      med = (array[index] + array[index + 1]) / 2;
    } else {
      med = array[length];
    }
    return med;
  } else {
    return med;
  }
}

function medianSubarray(array: number[], inf: number, sup: number): number {
  let med = -1;
  if (sup - inf > 0) {
    if ((sup - inf + 1) % 2 === 0) {
      let index = Math.floor((inf + sup) / 2);
      med = (array[index] + array[index + 1]) / 2;
    } else {
      med = array[Math.floor((inf + sup) / 2)];
    }
    return med;
  } else if (sup - inf === 0) {
    return array[inf];
  } else {
    return med;
  }
}

function medianDyV(
  array1: number[],
  array2: number[],
  a1Inf: number,
  a1Sup: number,
  a2Inf: number,
  a2Sup: number
): number {
  if (a1Inf === a1Sup && a2Inf === a2Sup) {
    return (array1[a1Inf] + array2[a2Inf]) / 2;
  }

  let m1: number = medianSubarray(array1, a1Inf, a1Sup);
  console.log(a1Inf, a1Sup, "m1", m1);

  let m2: number = medianSubarray(array2, a2Inf, a2Sup);
  console.log(a2Inf, a2Sup, "m2", m2);

  if (m1 === m2) {
    console.log("m1 === m2");
    console.log("=====");
    return m1;
  } else if (m1 < m2) {
    console.log("m1 < m2");
    console.log("=====");

    return medianDyV(
      array1,
      array2,
      Math.floor(a1Sup / 2) + 1,
      a1Sup,
      a2Inf,
      Math.floor(a2Sup / 2)
    );
  } else if (m2 < m1) {
    console.log("m2 < m1");
    console.log("=====");
    return medianDyV(
      array1,
      array2,
      a1Inf,
      Math.floor(a1Sup / 2),
      Math.floor(a2Sup / 2) + 1,
      a2Sup
    );
  }
}

let arrayPar: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let arrayImpar: number[] = [1, 2, 3, 4, 5, 6, 7];
// console.log("median: ", median(arrayPar), median(arrayImpar), median([]));
// console.log(medianSubarray(arrayPar, 0, 7));
// console.log(medianSubarray(arrayImpar, 0, 6));
// console.log(medianDyV(arrayPar, arrayPar, 0, 7, 0, 7));

let a1: number[] = [1, 2, 3, 4, 5];
let a2: number[] = [6, 7, 8, 9, 10];
console.log(medianDyV(a1, a2, 0, a1.length - 1, 0, a2.length - 1)); // mediana = 4
