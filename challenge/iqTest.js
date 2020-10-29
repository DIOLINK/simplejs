function iqTest(numbers) {
  if (numbers === undefined) {
    return null;
  }
  let nc = { even: 0, odd: 0, naux: [] };
  numbers
    .toString()
    .split(' ')
    .forEach((e) => {
      parseInt(e) % 2 === 0 ? (nc.even = nc.even + 1) : (nc.odd = nc.odd + 1),
        nc.naux.push(parseInt(e) % 2 === 0 ? 0 : 1);
    });

  if (nc.even > nc.odd) {
    return nc.naux.findIndex((f) => f === 1) + 1;
  }
  return nc.naux.findIndex((f) => f === 0) + 1;
}

console.log('iqTest::', iqTest('2 4 7 8 10'));
console.log('iqTest::', iqTest('1 2 1 1'));
console.log('iqTest::', iqTest('1 2 2'));
