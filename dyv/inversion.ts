function inversionFB(array: number[]): number {
  let inversiones = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        inversiones++;
        console.log("a[" + i + "]=", array[i], "a[" + j + "]=", array[j]);
      }
    }
  }
  return inversiones;
}

function inversionDyV(array: number[]): number[] {
  let mitad = Math.trunc(array.length / 2);
  var izq = array.slice(0, mitad);
  var dch = array.slice(mitad);
  console.log(izq, dch);

  if (mitad > 1) {
    izq = inversionDyV(izq);
    dch = inversionDyV(dch);
  }
  return combinar(izq, dch);
}

function combinar(izq: number[], dch: number[]): number[] {
  let i: number = 0;
  let j: number = 0;
  while (i < izq.length && j < dch.length) {
    if (izq[i] < dch[j]) {
      i++;
    } else if (izq[i] > dch[j]) {
      console.log("izq[" + i + "]=", izq[i], "dch[" + j + "]=", dch[j]);
      j++;
    }
  }

  let res: number[] = [];

  while (izq.length > 0 && dch.length > 0) {
    console.log("res 1", izq, dch, res);
    if (izq[0] <= dch[0]) {
      res.push(izq.shift());
    } else {
      res.push(dch.shift());
    }
  }
  console.log("res 2", izq, izq.length, dch, dch.length, res, res.length);
  if (izq.length > 0) {
    if (izq.length === 2) {
      if (izq[0] <= izq[1]) {
        res.push(izq.shift());
        res.push(izq.shift());
      } else {
        res.push(dch.pop());
        res.push(dch.pop());
      }
    } else {
      izq.forEach((elem) => {
        res.push(elem);
      });
    }
  } else if (dch.length > 0) {
    if (dch.length === 2) {
      if (dch[0] <= dch[1]) {
        res.push(dch.shift());
        res.push(dch.shift());
      } else {
        res.push(dch.pop());
        res.push(dch.pop());
      }
    } else {
      dch.forEach((elem) => {
        res.push(elem);
      });
    }
  }

  izq = [];
  dch = [];
  console.log("res 3", izq, dch, res);
  return res;
}

let arr: number[] = [2, 4, 1, 3, 5];

console.log(inversionFB(arr));
console.log("=================");

console.log(inversionDyV(arr));
