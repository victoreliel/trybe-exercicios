// AULA ARRAYS //


// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let searchForFirstTask = tasksList[0];
// console.log(searchForFirstTask);
// // Tomar café

// let searchForLastTask = tasksList[tasksList.length - 1];
// console.log(searchForLastTask);
// // Brincar com o cachorro

// console.push(); // adiciona mais um item no final da lista
// console.unshift(); // adiciona mais um item no início da lista
// console.pop(); // remove o último item da lista
// console.shift(); // remove o primeiro item da lista

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let indexOfTask = tasksList.indexOf('Reunião');  // procura o indice de um item no array
// console.log(indexOfTask);

// // 1


// Exercícios dos conteúdos (arrays) //


// Exercício 1

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);


// Exercício 2

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);


// Exercício 3

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.push('Contato');

// console.log(menu);


// AULA FOR //


// tabuada:

// var numero = 7;

// for(var contador = 1; contador <= 9; contador += 1) {
//     console.log(numero * contador);
// }


// lista de nomes:

// var listaDeNomes = ["Joana", "Maria", "Lucas"];

// for(var indice = 0; indice < listaDeNomes.length; indice += 1) {
//     var mensagem = "Boas vindas, " + listaDeNomes[indice] + "!";
//     console.log(mensagem);
// }


// lista de carros:

// let cars = ["Saab", "Volvo", "BMW"];

// for(let index = 0; index < cars.length; index += 1) {
//     console.log(cars[index]);
// }


// Exercício do conteúdo (for) //

// let groceryList = ["Arroz", "Feijão", "Alface", "Melância"];

// for(let index = 0; index < groceryList.length; index += 1) {
//     console.log(groceryList[index]);
// }


// AULA FOR/OF //



// let numeros = [1,2,3,4,5];
// for(let numero of numeros) {
//   console.log(numero);
// }

// // resultado:
// //1
// //2
// //3
// //4
// //5



// let word = 'Hello';
// for (let letter of word) {
//   console.log(letter);
// }
// // resultado:
// // "H"
// // "e"
// // "l"
// // "l"
// // "o"



// let arrOfNumbers = [10, 20, 30];
// for (let sum of arrOfNumbers) {
//   sum += 1;
//   console.log(sum);
// }
// // 11
// // 21
// // 31


// Exercício do conteúdo (for/of) //


// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for(let name of names){
//     console.log(name);
// }