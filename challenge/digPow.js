function digPow(n, p) {
  if (n === undefined || p === undefined || p === 0) {
    return console.error('Error');
  }
  let sum = 0;
  n.toString()
    .split('')
    .forEach((e, i) => {
      sum += parseInt(e) ** p++;
    });
  return (sum / n) % 1 ? -1 : sum / n;
}

console.log('digPow :>> ', digPow(89, 1));
console.log('digPow :>> ', digPow(92, 1));
console.log('digPow :>> ', digPow(46288, 3));
