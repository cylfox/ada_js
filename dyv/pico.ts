function pico(array: number[]): number {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) return array[i];
  }
  return -1;
}

function picoDyV(
  array: number[],
  inf: number,
  sup: number,
  id: string
): number {
  console.log(id, "i:", inf, "s:", sup);
  let mitad = Math.trunc((inf + sup) / 2);
  if (array[mitad - 1] < array[mitad] && array[mitad] < array[mitad + 1]) {
    picoDyV(array, mitad, sup, "dch");
  } else if (
    array[mitad - 1] > array[mitad] &&
    array[mitad] > array[mitad + 1]
  ) {
    picoDyV(array, inf, mitad, "izq");
  } else {
    console.log("eureka", mitad, array[mitad]);
    return array[mitad];
  }
}

let arra: number[] = [1, 5, 7, 9, 6];

console.log(pico(arra));
console.log(picoDyV(arra, 0, arra.length - 1, "start"));
