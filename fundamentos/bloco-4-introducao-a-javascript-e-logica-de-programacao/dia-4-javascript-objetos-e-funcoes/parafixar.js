// Objetos

// let singer = {
//   name: "Milton",
//   lastName: "Nascimento",
//   nickname: "Bituca",
//   age: 77,
//   bestAlbuns: ["Travessia", "Clube da Esquina", "Minas"],
//   bornInfo: {
//     city: "Rio de Janeiro",
//     state: "Rio de Janeiro"
//   }
// }

// console.log("O cantor " + singer.name + " " + singer.lastName + " possui " + singer.age + " anos.");

// console.log("O cantor " + singer["name"] + " " + singer["lastName"] + " possui " + singer["age"] + " anos.");

// singer["fullName"] = singer.name + " " + singer.lastName;

// console.table(singer);

// console.log("O cantor " + singer.fullName + " nasceu no estado do " + singer.bornInfo.state);


// Exemplos de uso de objetos:

// let diasDaSemana = {
//   : 'domingo',
//   : 'segunda',
//   : 'terça',
//   : 'quarta',
//   : 'quinta',
//   : 'sexta',
//   : 'sábado',
//   };
  
//   diasDaSemana.1; // SyntaxError: Unexpected number
//   console.log(diasDaSemana['1']); // domingo

// let conta = {
//   agencia: '0000',
//   banco: {
//     cod: '012',
//     id: 4,
//     nome: 'TrybeBank',
//   },
// };

// let infoDoBanco = 'banco';
// console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
// console.log(conta[infoDoBanco]['nome']); // TrybeBank

// console.log(conta.agencia); // 0000
// console.log(conta['agencia']); // 0000

// console.log(conta.banco.cod); // 012
// console.log(conta['banco']['id']); // 4

// let usuario = {
//   id: 99,
//   email: 'jakeperalta@gmail.com',
//   infoPessoal: {
//     nome: 'Jake',
//     sobrenome: 'Peralta',
//     endereco: {
//       rua: 'Smith Street',
//       bairro: 'Brooklyn',
//       cidade: 'Nova Iorque',
//       estado: 'Nova Iorque',
//     },
//   },
// };

// console.log(usuario['id']); // 99
// console.log(usuario.email); // jakeperalta@gmail.com

// console.log(usuario.infoPessoal.endereco.rua); // Smith Street
// console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

// let moradores = [
//   {
//     nome: 'Luiza',
//     sobrenome: 'Guimarães',
//     andar: 10,
//     apartamento: 1005,
//   },
//   {
//     nome: 'William',
//     sobrenome: 'Albuquerque',
//     andar: 5,
//     apartamento: 502,
//   },
//   {
//     nome: 'Murilo',
//     sobrenome: 'Ferraz',
//     andar: 8,
//     apartamento: 804,
//   },
//   {
//     nome: 'Zoey',
//     sobrenome: 'Brooks',
//     andar: 1,
//     apartamento: 101,
//   },
// ];

// let primeiroMorador = moradores[0];
// console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
// console.log(primeiroMorador['andar']); // 10

// let ultimoMorador = moradores[moradores.length - 1];
// console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
// console.log(ultimoMorador.nome); // Zoey


// Para fixar:

// // let name = 'Marta';
// // let lastName = 'Silva';
// // let age = 34;
// // let medals = { golden: 2, silver: 3 };

// let player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
//   medals: {
//     golden: 2,
//     silver: 3
//   }
// }

// player['fullName'] = player.name + ' ' + player.lastName;

// console.log('A jogadora ' + player['fullName'] + ' tem ' + player['age'] + ' anos de idade.');
// console.log('A jogadora ' + player['fullName'] + ' foi eleita a melhor do mundo por 6 vezes.');
// console.log('A jogadora possui ' + player['medals']['golden'] + ' medalhas de ouro e ' + player['medals']['silver'] + ' medalhas de prata.');


// for/in e for/of

// let pizzas = {
//   sabor: 'Palmito',
//   preco: 39.90,
//   bordaCatupiry: true
// };

// for (let key in pizzas) {
//   console.log(pizzas[key]);
// }

// let pizzasDoces = ['chocolate', 'banana', 'morango'];

// for (let key in pizzasDoces) {
//   console.log(key, pizzasDoces[key]);
// }

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }


// diferença for/in e for/of:

// let food = ['hamburguer', 'bife', 'acarajé'];

// for (let position in food) {
//   console.log(position);
// };
// //resultado: 0, 1, 2;

// for (let value of food) {
//   console.log(value);
// };
//resultado: hamburguer, bife, acarajé;


// Para fixar:

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (let key in names) {
//   console.log('Olá ' + names[key]);
// }

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for (let key in car) {
//   console.log(key, car[key]);
// }


// Funções:


// // Sem função
// let nome = 'João';

// console.log('Bom dia, ' + nome);


// // Com função
// function bomDiaTryber(nome) {
//   console.log('Bom dia, ' + nome);
// }

// bomDiaTryber('João'); // Bom dia, João
// bomDiaTryber('Julia'); // Bom dia, Julia
// bomDiaTryber('Marcelo'); // Bom dia, Marcelo

// function bomDia() {
//   return 'Bom dia!';
// }

// console.log(bomDia()); // Bom dia!

// let status = 'deslogado';

// function logarDeslogar() {
//   if (status === 'deslogado') {
//     status = 'logado';
//   } else {
//     status = 'deslogado';
//   }
// }

// console.log(status); // deslogado

// logarDeslogar();
// console.log(status); // logado

// logarDeslogar();
// console.log(status); // deslogado

// console.log('O usuário está ' + status); // O usuário está deslogado

// Com função
// function soma(a, b) {
//   return a + b;
// }

// console.log(soma(5, 2)); // 7

// function maiorNum(primeiroNum, segundoNum) {
//   if (primeiroNum > segundoNum) {
//     return primeiroNum + ' é maior que ' + segundoNum;
//   } else if (segundoNum > primeiroNum) {
//     return segundoNum + ' é maior que ' + primeiroNum;
//   } else {
//     return 'Os números são iguais';
//   }
// }

// console.log(maiorNum(10, 20)); // 20 é maior que 10
// console.log(maiorNum(2, -5)); // 2 é maior que -5
// console.log(maiorNum(1, 1)); // Os números são iguais