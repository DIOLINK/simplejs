function validParentheses(parens) {
  var reg = /(\(+(\[+(\{+\}+)?\]+)?\)+)+/gi;

  return reg.test(parens);
}

console.log('validParentheses :>> ', validParentheses('()'));
console.log('validParentheses :>> ', validParentheses('())'));
