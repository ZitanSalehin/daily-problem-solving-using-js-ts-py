function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";
  
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}

// Example usage
console.log(countVowels("hello world")); // Output: 3
console.log(countVowels("javascript is fun")); // Output: 5
