// Exercício 1

// let fatorial = 10;
// let resultado = fatorial;
// let primeiroMultiplicador = fatorial - 1;
// for (let index = primeiroMultiplicador; index > 1; index -= 1) {
//     resultado *= index;
// }

// console.log(resultado);


// Exercício 2

// let word = "assando um caramelo";
// let inversao = word.split("").reverse().join("");

// console.log(inversao);


// Exercício 3

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = "";
// let menorPalavra = "java";

// for (let index = 0; index < array.length; index += 1) {
//     if (array[index].length > maiorPalavra.length) {
//         maiorPalavra = array[index];
//     }
// }
// console.log(maiorPalavra);

// for (let index = 0; index < array.length; index += 1) {
//     if (array[index].length < menorPalavra.length) {
//         menorPalavra = array[index];
//     }
// }
// console.log(menorPalavra);


// Exercício 4

let maiorPrimo = 0;

for (let index = 0; index <= 50; index += 1) {
    let primo = true;
    for (let secondIndex = 2; secondIndex < index; secondIndex += 1) {
        if (index % secondIndex === 0) {
            primo = false;
        }
    }
    if (primo) {
        maiorPrimo = index;
    }
}

console.log(maiorPrimo);