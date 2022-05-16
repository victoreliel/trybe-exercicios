// Exercício 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// console.log(numbers);


// Exercício 2

// let somaNumeros = 0;

// for(index = 0; index < numbers.length; index += 1) {
//     somaNumeros += numbers[index];
// // }
// console.log(somaNumeros);


// Exercício 3

// let mediaAritmetica = 0;

// for(index = 0; index < numbers.length; index += 1) {
//     somaNumeros += numbers[index];
// }
// mediaAritmetica = somaNumeros / numbers.length;

// console.log(mediaAritmetica);


// Exercício 4

// if (mediaAritmetica > 20) {
//     console.log("valor maior que 20");
// } else {
//     console.log("valor menor ou igual a 20");
// }


// Exercício 5

// let maiorNumero = 0;

// for(index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > maiorNumero) {
//         maiorNumero = numbers[index];
//     }
// }

// console.log(maiorNumero);


// Exercício 6

// let impares = 0;

// for(index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 != 0) {
//         impares += 1;
//     }
// }

// if (impares > 0) {
//     console.log(impares);
// } else {
// console.log("nenhum valor ímpar encontrado");
// }


// Exercício 7

// let menorNumero = 101;

// for(index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] < menorNumero) {
//         menorNumero = numbers[index];
//     }
// }

// console.log(menorNumero);


// Exercício 8

// let resultado = [];

// for(index = 1; index < 26; index += 1) {
//     resultado.push(index);
// }

// console.log(resultado);


// // Exercício 9

// let divisaoDosElementos = [];

// for(index = 0; index < resultado.length; index += 1) {
//     divisaoDosElementos.push(resultado[index] / 2);
// }

// console.log(divisaoDosElementos);



// Invenção do vitão (contagem de letras numa frase)

// let frase = "É preciso amar as pessoas como se não houvesse amanhã";
// let letra = "e";
// let contagem = 0;

// for(index = 0; index < frase.length; index += 1) {
//     if (frase[index] == letra) {
//         contagem += 1;
//     }
// }

// console.log(contagem);



// Bônus

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }

//   console.log(numbers);

// Bônus 3 (a corrigir)

// let newNumbers = [];

// for (let index = 0; index < numbers.length; index += 1) {
//     let multiplicacao = numbers[index];
//     newNumbers.push(multiplicacao * numbers[index]);
// }

// console.log(newNumbers);