function duplicateCount(text) {
  if (text === undefined) {
    return 0;
  }
  const lc = {};
  text
    .toLowerCase()
    .split('')
    .forEach((l) => {
      lc[l] = lc[l] ? lc[l] + 1 : 1;
    });
  return Object.values(lc).filter((f) => {
    return f >= 2;
  }).length;
}
console.log(duplicateCount(''));
console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('indivisibility'));
console.log(duplicateCount('Indivisibilities'));
