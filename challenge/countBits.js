var countBits = function (n) {
  if (n === undefined || n < 0) return console.error('Error');
  let c = { bool: true, aux: n, 1: 0 };
  while (c.bool) {
    c.aux % 2 === 1 ? (c[1] = c[1] + 1) : '';
    c.aux = Math.floor(c.aux / 2);
    if (c.aux <= 0) {
      c.bool = false;
    }
  }
  return c[1];
};

console.log('countBits n: 0   :>> ', countBits(0));
console.log('countBits n: 4   :>> ', countBits(4));
console.log('countBits n: 7   :>> ', countBits(7));
console.log('countBits n: 23  :>> ', countBits(23));
console.log('countBits n: 10  :>> ', countBits(10));
console.log('countBits n: 3   :>> ', countBits(3));
// console.log('countBits :>> ', countBits(-9));
