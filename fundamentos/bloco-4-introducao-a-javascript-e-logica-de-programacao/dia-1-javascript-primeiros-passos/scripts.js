// Variáveis

// const myName = "Victor";
// const birthCity = "Porto Alegre";
// let birthYear = 2030;
// birthYear = 2000; // variáveis podem ter seu valor atualizado
// // birthCity = "Alvorada"; constantes não podem


// Tipos primitivos, tipagem dinâmica e operações aritméticas

// let movie = "Avengers"; // string literal
// let score = 10.89; // number literal
// let isValid = true; // boolean
// let name; // undefined
// let color = null; // redefinição

// +, -, *, /, **

// let salary = 3500;

// console.log(myName, birthCity, birthYear);
// console.log(salary + salary);

// incrementar e decrementar: ++ --

// salary ++;

// console.log(salary);

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId);

// const base = 5;
// let height = 8;
// const area = base * height;
// const perimeter = area;

// console.log(area);


// If / Else

// if - se
// else - senão

// if (condicao) {
//   // codigo
// }
// else if (outraCondicao) {
//   // outro codigo
// }
// else if (outraCondicao) {
//   // outro codigo
// }
// else {
//   // se nenhuma condicao anterior for executada, essa sera
// }

// let trybe = 19.40;

// if (trybe >= 14&& trybe < 14.40) {
//   console.log("Esquenta");
// }
// else if (trybe >= 16.30 && trybe < 17.50) {
//   console.log("Aula ao vivo");
// }
// else if (trybe >= 19.40 && trybe < 20) {
//   console.log("Fechamento");
// }
// else {
//   console.log("Fora dos momentos síncronos");
// }

// const notaDesafio = 56;

// if (notaDesafio >= 80) {
//   console.log("Parabéns, você foi aprovada(o)!");
// }
// else if (notaDesafio < 80 && notaDesafio >= 60) {
//   console.log("Você está na nossa lista de espera");
// }
// else {
//   console.log("Você foi reprovada(o)");
// }


// Operador AND (&&)

// const comida = 'pão na chapa';
// const bebida = 'cafezinho';

// if (bebida === 'cafezinho' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

// const conditionOne = true;
// const conditionTwo = false;

// console.log(conditionOne && conditionTwo);

// const cenouras = true;
// const leite = true;
// const arroz = true;
// const feijao = true;

// const listaDeCompras = cenouras && leite && arroz && feijao;

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// const currentHour = 5;
// let message = null;

// if (currentHour >= 22) {
//   message = "Não deveríamos comer nada, é hora de dormir";
// }
// else if (currentHour >= 18 && currentHour < 22) {
//   message = "Rango da noite, vamos jantar :D";
// }
// else if (currentHour >= 14 && currentHour < 18) {
//   message = "Vamos fazer um bolo pro café da tarde?";
// }
// else if (currentHour >= 11 && currentHour < 14) {
//   message = "Hora do almoço!!!";
// }
// else if (currentHour >= 4 && currentHour < 11) {
//   message = "Hmmm, cheiro de café recém passado";
// }

// console.log(message);


// Operador OR

// const bebidaPrincipal =  'cafezinho';
// const bebidaAlternativa = 'suco de laranja';

// if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
//   console.log("Obrigado por me atender :D")
// } else {
//   console.log("Ei, eu não pedi isso!");
// }

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// let weekDay = "sabado";

// if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
//   console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// }
// else {
//   console.log("FINALMENTE, descanso merecido UwU");
// }


// Operador NOT

// console.log((2 + 2) === 4); // true
// console.log(!(2 + 2) === 4); // false

// const squirtle = "melhor pokemon inicial";

// console.log(!squirtle); // false

// console.log(!42); // false

// console.log(!0); // true
// // O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

// console.log(!null); // true

// console.log(!undefined); // true


// SWITCH -- CASE

// let trafficLight = "ablublabla";

// switch (trafficLight) {
//   case "vermelho":
//     console.log("pare");
//     break;
//   case "amarelo":
//     console.log("atenção");
//     break
//   case "verde":
//     console.log("siga");
//     break;

//   default:
//     console.log("valor não identificado");
// }

// let estadoPessoaCandidata = "ablublabla";

// switch (estadoPessoaCandidata) {
//   case "aprovada":
//     console.log("você passou!");
//     break;
//   case "lista":
//     console.log("você está na nossa lista");
//     break;
//   case "reprovada":
//     console.log("você reprovou");
//     break;
//   default:
//     console.log("não se aplica");
// }