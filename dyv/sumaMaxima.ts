function sumaMaximaConsecutiva(array: number[]) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let currentMax = 0;
      for (let k = i; k <= j; k++) {
        currentMax += array[k];
      }
      if (currentMax > max) max = currentMax;
    }
  }
  return max;
}

function sumaMaximaDyV(array: number[], inf: number, sup: number, id: string) {
  console.log(id, "i:", inf, "s:", sup);
  if (inf === sup) {
    console.log("return", array[inf]);
    return array[inf];
  }

  let mitad: number = Math.trunc((inf + sup) / 2);
  console.log("mitad", mitad);

  // sumar los valores entre la mitad y la parte izq, mitad y la parte derecha,
  // la parte de la izq con la parte de la derecha

  // ambas partes hay que recorrerlas desde la mitad, para asi poder
  // quedarnos con el valor mayor encontrado
  let aux: number = 0;
  let parteIzq: number = 0;
  for (let i = mitad; i >= inf; i--) {
    aux += array[i];
    if (parteIzq < aux) parteIzq = aux;
  }
  aux = 0;
  let parteDch: number = 0;
  for (let i = mitad + 1; i <= sup; i++) {
    aux += array[i];
    if (parteDch < aux) parteDch = aux;
  }

  let maxPartes = Math.max(parteIzq, parteDch, parteIzq + parteDch);
  console.log(
    parteIzq,
    parteDch,
    parteIzq + parteDch,
    "maxPartes: ",
    maxPartes
  );

  let max = Math.max(
    sumaMaximaDyV(array, inf, mitad, "izq"),
    sumaMaximaDyV(array, mitad + 1, sup, "dch"),
    maxPartes
  );

  return max;
}

let a: number[] = [-2, 11, -4, 13, -5, -2];

// console.log(sumaMaximaConsecutiva(a));

console.log(sumaMaximaDyV(a, 0, a.length - 1, "start"));
