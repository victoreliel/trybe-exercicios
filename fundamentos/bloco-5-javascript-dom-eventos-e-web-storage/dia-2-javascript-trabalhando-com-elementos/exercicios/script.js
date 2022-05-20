// Exercícios

// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
// Parte 2 - Adicione a classe title na tag h1 criada;

let corpo = document.getElementsByTagName("body")[0];

let titulo = document.createElement("h1");
titulo.innerText = "Exercício 5.2 - JavaScript DOM";
titulo.style.textAlign = "center";
titulo.className = "title";

corpo.appendChild(titulo);

// 2 - Adicione a tag main com a classe main-content como filho da tag body;

let main = document.createElement("main");
main.className = "main-content";
main.style.backgroundColor = "green";

corpo.appendChild(main);

// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
// Parte 2 - Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

let section1 = document.createElement("section");
section1.className = "center-content";

main.appendChild(section1);

// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let p1 = document.createElement("p");
p1.innerText = "Olá, eu sou um parágrafo";

section1.appendChild(p1);

// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
// Parte 2 - Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

let section2 = document.createElement("section");
section2.className = "left-content";

main.appendChild(section2);

main.removeChild(section2);

// 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// Parte 2 - Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

let section3 = document.createElement("section");
section3.className = "right-content";
section3.style.marginRight = "auto";

main.appendChild(section3);

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let image = document.createElement("img");
image.src = "https://picsum.photos/200";
image.className = "small-image";

section2.appendChild(image);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// Parte 2 - Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

let listaNaoOrdenada = document.createElement("ul");
let valores = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

for (let index in valores) {
  let li = document.createElement("li");
  li.innerHTML = valores[index];
  listaNaoOrdenada.appendChild(li);
}

section3.appendChild(listaNaoOrdenada);

for (let index = 8; index <= 9; index += 1) {
  let remover = document.getElementsByTagName("ul")[0].lastElementChild;
  listaNaoOrdenada.removeChild(remover);
}

// 9 - Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
// Parte 2 - Adicione a classe description nas 3 tags h3 criadas;

for (let index = 1; index <= 3; index += 1) {
  let h3 = document.createElement("h3");
  h3.className = "description";
  main.appendChild(h3);
}