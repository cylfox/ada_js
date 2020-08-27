/**
 * Complexity
 * 15n^3 + 6n^2 + 10n + 5
 * O(n^3)
 */
function matrixProduct(matrixA: number[][], matrixB: number[][]) {
  let matrixC: number[][] = [
    [0, 0],
    [0, 0],
  ];
  for (let i = 0; i < matrixA.length; i++) {
    // 5 || 4
    for (let j = 0; j < matrixB.length; j++) {
      // 5 || 4
      let res = 0;
      for (let k = 0; k < matrixC.length; k++) {
        // 5 || 4
        res += matrixA[i][k] * matrixB[k][j]; // 5
      }
      matrixC[i][j] = res; // 2 || 1
    }
  }
  console.log("->", matrixC);
  return matrixC;
}

/**
 * Complexity
 * 15n^3 + 6n^2 + 10n + 5
 * O(n^3)
 */
function powerMatrixBruteIterative(matrix: number[][], n: number) {
  // al cuadrado
  if (n > 1) {
    let matrixRes: number[][] = matrixProduct(matrix, matrix);
    n--;
    for (let i = 2; i <= n; i++) {
      matrixRes = matrixProduct(matrixRes, matrix);
    }
    return matrixRes;
  } else {
    return matrix;
  }
}

function powerMatrixBruteRecursive(matrix: number[][], n: number) {
  if (n !== 1) {
    return matrixProduct(matrix, powerMatrixBruteRecursive(matrix, --n));
  } else {
    return matrix;
  }
}

function powerMatrixDVRecursive(matrix: number[][], n: number) {
  console.log(matrix, n);

  if (n !== 1) {
    let matrixRes = powerMatrixDVRecursive(matrix, Math.floor(n / 2));
    let matrixProd = matrixProduct(matrixRes, matrixRes);
    if (n % 2 == 0) {
      return matrixProd;
    } else {
      return matrixProduct(matrixProd, matrix);
    }
  } else {
    return matrix;
  }
}

var matrixA: number[][] = [
  [2, 0],
  [1, 3],
];

var matrixB: number[][] = [
  [-1, -1],
  [5, 6],
];

// console.log(JSON.stringify(matrixProduct(matrixA, matrixB)));
// sol
// [-2, -2]
// [14, 17]

var matrix: number[][] = [
  [2, 0],
  [1, 2],
];
var n = 10;
console.log("recursive good");
console.log(
  JSON.stringify(powerMatrixDVRecursive(matrix, n)).replace("],", "]\n")
);
// for (let index = 1; index <= 5; index++) {
//   console.log("===> n =", index);
//   // console.log("BRUTE FORCE");
//   // console.log(
//   //   JSON.stringify(powerMatrixBruteIterative(matrix, index)).replace(
//   //     "],",
//   //     "]\n"
//   //   )
//   // );
//   console.log("Lorena");
//   console.log(
//     JSON.stringify(powerMatrixLorena(matrix, index)).replace("],", "]\n")
//   );

//   console.log("recursive bad");
//   console.log(
//     JSON.stringify(powerMatrixDVRecursive(matrix, index)).replace(
//       "],",
//       "]\n"
//     )
//   );
// }

// console.log(matrixProduct(matrixProduct(matrix, matrix), matrix));
