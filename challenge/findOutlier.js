function findOutlier(integers) {
  if (integers === undefined) {
    return null;
  }
  const nd = {};
  integers.forEach((n) => {
    nd[n] = n % 2 === 0 ? 1 : -1;
  });
  return Object.values(nd).reduce((a, c) => a * c);
}
console.log('findOutlier :>> ', findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log('findOutlier :>> ', findOutlier([160, 3, 1719, 19, 11, 13, -21]));
console.log('findOutlier :>> ', findOutlier([160, 3, 1719, 19, 11, 13, -21]));
console.log('findOutlier :>> ', findOutlier([160, 3, 1719, 19, 11, 13, -21]));
