// Parte I - Objetos e For/in


// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };


// Exercício 1

// console.log('Bem-vinda, ' + info['personagem']);


// Exercício 2

// info['recorrente'] = 'Sim';

// console.log(info);


// Exercício 3

// for (key in info) {
//   console.log(key);
// }


// Exercício 4

// for (key in info) {
//   console.log(info[key]);
// }


// Exercício 5

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim',
// }

// console.log(info['personagem'] + ' e ' + info2['personagem']);
// console.log(info['origem'] + ' e ' + info2['origem']);
// console.log(info['nota'] + ' e ' + info2['nota']);
// if (info.recorrente === info2.recorrente) {
//   console.log('Ambas Recorrentes');
// }


// Exercício 6

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// leitor['nomeCompleto'] = leitor.nome + ' ' + leitor.sobrenome;
// console.log('O livro favorito de ' + leitor['nomeCompleto'] + ' se chama ' + "'" + leitor['livrosFavoritos'][0]['titulo'] + "'");


// Exercício 7

// leitor['livrosFavoritos'][1] = {
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// }


// Exercício 8

// console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos');



// Parte II - Funções


// Exercício 1

// function verificaPalindromo(word) {
//   let reverse = word.split('').reverse().join('');
//   if (reverse === word) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(verificaPalindromo('arara'));
// console.log(verificaPalindromo('desenvolvimento'));


// Exercício 2

// function indiceMaiorValor(numbers) {
//   let indexMaiorNumero = 0;
//   for (let index in numbers) {
//     if (numbers[indexMaiorNumero] < numbers[index]) {
//       indexMaiorNumero = index;
//     }
//   }
//   return indexMaiorNumero;
// }

// console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));


// Exercício 3

// function indiceMenorValor(numbers) {
//   let indexMenorNumero = 0;
//   for (let index in numbers) {
//     if (numbers[indexMenorNumero] > numbers[index]) {
//       indexMenorNumero = index;
//     }
//   }
//   return indexMenorNumero;
// }

// console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));


// Exercício 4

// function maiorNomeDoArray(nomes) {
//   let maiorNome = nomes[0];
//   for (let index in nomes) {
//     if (maiorNome.length < nomes[index].length) {
//       maiorNome = nomes[index];
//     }
//   }
//   return maiorNome;
// }

// console.log(maiorNomeDoArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// Exercício 5

// function maisRepetido(numbers) {
//   let contRepetido = 0;
//   let contNumero = 0;
//   let indexNumeroRepetido = 0;
//   for (let index in numbers) {
//     let verificaNumero = numbers[index];
//     for (let index2 in numbers) {
//       if (verificaNumero === numbers[index2]) {
//         contNumero += 1;
//       }
//     }
//     if (contNumero > contRepetido) {
//       contRepetido = contNumero;
//       indexNumeroRepetido = index;
//     }
//     contNumero = 0;
//   }
//   return numbers[indexNumeroRepetido];
// }

// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));


// Exercício 6

// function somaAteNumero(n) {
//   let listaDaSoma = [];
//   let soma = 0;
//   for (let index = 1; index <= n; index += 1) {
//     listaDaSoma.push(index);
//   }
//   for (let index = 0; index < listaDaSoma.length; index += 1) {
//     soma += listaDaSoma[index];
//   }
//   return soma;
// }

// console.log(somaAteNumero(5));


// Exercício 7

// function verificaFimDaPalavra(word, ending) {
//   word = word.split('');
//   ending = ending.split('');
//   result = true;
//   for (let index = 0; index < ending.length; index += 1) {
//     if (word[word.length - ending.length + index] != ending[index]) {
//       result = false;
//     }
//   }
//   return result;
// }

// console.log(verificaFimDaPalavra('trybe', 'be'));
// console.log(verificaFimDaPalavra('joaofernando', 'fernan'));