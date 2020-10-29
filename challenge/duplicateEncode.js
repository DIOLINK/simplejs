const duplicateEncode = (word) => {
  if (word) {
    let wordSlice = [];
    wordSlice = word.toLowerCase().split('');
    let result = [];
    let wordSplitR = wordSlice.map((w, i) => {
      return word.toLowerCase().slice(i + 1);
    });
    return wordSplitR;
  } else {
    return null;
  }
};

console.log('duplicateEncode::', duplicateEncode('din'));
console.log('duplicateEncode::', duplicateEncode('recede'));
console.log('duplicateEncode::', duplicateEncode('Success'));
console.log('duplicateEncode::', duplicateEncode('Adrian'));
