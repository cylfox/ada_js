// https://www.geeksforgeeks.org/longest-monotonically-increasing-subsequence-size-n-log-n/
function busqueda(array: number[], element: number) {
  let inf = 0;
  let sup = array.length - 1;
  while (sup - inf > 1) {
    let mitad = Math.floor((inf + sup) / 2);
    console.log(
      "inf",
      inf,
      "sup",
      sup,
      "mitad",
      mitad,
      " - ",
      array[mitad],
      element,
      array[mitad] >= element
    );
    if (array[mitad] >= element) {
      sup = mitad;
    } else {
      inf = mitad;
    }
  }
  return sup;
}

function subsecuenciaCrecienteMasLarga(array: number[]) {
  let cases: number[] = [array[0]];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < cases[0]) {
      // sustituye al array de tamaño 1
      cases[0] = array[i];
    } else if (array[i] > cases[cases.length - 1]) {
      cases.push(array[i]);
    } else {
      cases[busqueda(cases, array[i])] = array[i];
    }
  }
  return cases.length;
}

let a1: number[] = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
let c: number[] = [0, 2, 6, 9, 13];
console.log(busqueda(c, 4));

console.log(subsecuenciaCrecienteMasLarga(a1));
