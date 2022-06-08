const retornaFatorial = n => {
  let result = 1;
  
  for (let index = 1; index <= n; index += 1) {
    result = result * index;
  }
  return result;
}

console.log(retornaFatorial(3));

// ou


const retornaFatorialReduzida = n => n > 1 ? n * retornaFatorialReduzida(n - 1) : 1;
console.log(retornaFatorialReduzida(3));