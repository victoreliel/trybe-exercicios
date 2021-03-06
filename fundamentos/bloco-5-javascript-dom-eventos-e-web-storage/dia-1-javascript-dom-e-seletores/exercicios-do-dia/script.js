// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()
//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
//  Crie uma função que mude a cor do quadrado vermelho para branco.
//  Crie uma função que corrija o texto da tag <h1>.
//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function changeText() {
  let paragrafo = document.getElementsByTagName('p')[1];
  paragrafo.innerText = 'Empregado e de casa própria';
}
changeText();

function changeSquareToGreen() {
  let square = document.getElementsByClassName('main-content')[0];
  square.style.backgroundColor = 'rgb(76,164,109)';
}
changeSquareToGreen();

function changeSquareToWhite() {
  let centerSquare = document.getElementsByClassName('center-content')[0];
  centerSquare.style.backgroundColor = 'white';
}
changeSquareToWhite();

function correctTitle() {
  let title = document.getElementsByTagName('h1')[0];
  title.innerText = 'Exercício 5.1 - JavaScript';
}
correctTitle();

function paragraphUpperCase() {
  let paragrafo = document.getElementsByTagName('p')[0];
  paragrafo.innerHTML = paragrafo.innerHTML.toUpperCase();
}
paragraphUpperCase();

function showParagraphs() {
  let paragrafos = document.getElementsByTagName('p');
  for (let index = 0; index < paragrafos.length; index += 1) {
    console.log(paragrafos[index].innerHTML);
  }
}
showParagraphs();