// // Spread Operator:

// Faça uma lista com as suas frutas favoritas
// const specialFruit = ['morango', 'abacaxi', 'maracujá'];

// Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['chocolate em pó', 'leite condensado', 'cobertura'];

// const fruitSalad = (fruit, additional) => {
//   const salada = [...fruit, ...additional];
//   return salada;
// };

// console.log(fruitSalad(specialFruit, additionalItens));


// // Object Destructuring

// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };

// const userJob = { ...user, ...jobInfos };

// console.log(userJob);

// const printUserJob = ({ name, age, nationality, profession, squadInitials, squad }) => {
//   console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);
// };

// printUserJob(userJob);


// // Array Destructuring:

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

// const [saudacao, realizaSaudacao] = saudacoes;

// console.log(realizaSaudacao(saudacao));


// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// [comida, animal, bebida] = [bebida, comida, animal];
// console.log(comida, animal, bebida);


// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// [,,, ...numerosPares] = numerosPares;

// console.log(numerosPares);


// // Default Destructuring:

// const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));


// // Property Shorthand:

// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude,
// });

// console.log(getPosition(-19.8157, -43.9542));


// // Default Parameters:

// const multiply = (number, value = 1) => {
//   return number * value;
// };

// console.log(multiply(8));