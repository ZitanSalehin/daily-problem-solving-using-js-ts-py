function duplicateEncode(word) {
  word = word.toLowerCase();
  
  let charCount = {};
  
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  let result = '';
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    result += (charCount[char] === 1 ? '(' : ')');
  }
  
  return result;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));