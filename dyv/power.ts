function power(a: number, n: number): number {
  console.log("FB");

  let res = a;
  for (let i = 1; i < n; i++) {
    console.log("res=", res);

    res = res * a;
  }
  return res;
}

function powerRec(a: number, n: number): number {
  console.log("DYV");
  if (n !== 1) {
    let res = powerRec(a, Math.trunc(n / 2));
    if (n % 2 === 0) {
      console.log(n/2, "PAR res=", res * res);
      return res * res;
    } else {
      console.log(n/2, "IMP res=", res * a);
      return res * res * a;
    }
  } else {
    return a;
  }
}

let na = 7;
console.log(Math.pow(2, na));
console.log("==================");

console.log(powerRec(2, na));
