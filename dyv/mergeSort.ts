function mergeSort(array: number[]): number[] {
  let mitad = Math.trunc(array.length / 2);
  var izq = array.slice(0, mitad);
  var dch = array.slice(mitad);
  console.log(izq, dch);

  if (mitad > 1) {
    izq = mergeSort(izq);
    dch = mergeSort(dch);
  }
  return combine(izq, dch);
}

function combine(izq: number[], dch: number[]): number[] {
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

let ar: number[] = [2, 7, 1, 9, 3];
console.log(ar);
let res = mergeSort(ar);
console.log(res);
