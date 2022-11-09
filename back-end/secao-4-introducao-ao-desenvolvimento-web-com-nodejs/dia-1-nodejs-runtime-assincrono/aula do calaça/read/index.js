const readline = require('readline-sync');
const imc = require('./imc');
const fs = require('fs');

const askName = () => {
  return readline.question('Qual é o seu nome? ');
}

const askHeight = () => {
  return readline.questionFloat('Qual é a sua altura? ');
}

const askWeight = () => {
  return readline.questionFloat('Qual é o seu peso? ');
}

const name = askName();
const height = askHeight();
const weight = askWeight();

const result = imc(weight, height);

fs.appendFileSync('imc.txt', `O IMC de ${name} é: ${result}\n`);
const data = fs.readFileSync('imc.txt', {encoding:'utf8', flag:'r'});

console.log(data);

if (result < 18.5) {
  console.log('Status: Underweight (thin');
  return;
}

if (result >= 18.5 && result < 25) {
  console.log('Status: Normal weight');
  return;
}

if (result >= 25 && result < 30) {
  console.log('Status: Overweight');
  return;
}

if (result >= 30 && result < 35) {
  console.log('Status: Grade I obesity');
  return;
}

if (result >= 35 && result < 40) {
  console.log('Status: Grade II obesity');
  return;
}

console.log('Status: Obesity grades III and IV');