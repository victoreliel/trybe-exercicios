const longestWord = text => {
  let array = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of array) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  return result;
}

console.log(longestWord('Antonio foi no banheiro e não sabemos o que aconteceu'));

// ou

const longestWordReduzida = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
console.log(longestWordReduzida('Antonio foi no banheiro e não sabemos o que aconteceu'));