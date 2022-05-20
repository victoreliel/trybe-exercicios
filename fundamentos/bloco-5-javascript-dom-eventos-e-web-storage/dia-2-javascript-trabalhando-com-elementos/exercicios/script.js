// Exercícios

// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let corpo = document.getElementsByTagName("body")[0];

let titulo = document.createElement("h1");
titulo.innerText = "Exercício 5.2 - JavaScript DOM";

corpo.appendChild(titulo);

// 2 - Adicione a tag main com a classe main-content como filho da tag body;

let main = document.createElement("main");
main.className = "main-content";

corpo.appendChild(main);