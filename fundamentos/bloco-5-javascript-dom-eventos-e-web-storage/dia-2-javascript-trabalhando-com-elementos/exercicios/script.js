// Exercícios

// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let corpo = document.getElementsByTagName("body")[0];

let titulo = document.createElement("h1");
titulo.innerText = "Exercício 5.2 - JavaScript DOM";
titulo.style.textAlign = "center";

corpo.appendChild(titulo);

// 2 - Adicione a tag main com a classe main-content como filho da tag body;

let main = document.createElement("main");
main.className = "main-content";

corpo.appendChild(main);

// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let section1 = document.createElement("section");
section1.className = "center-content";

main.appendChild(section1);

// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let p1 = document.createElement("p");
p1.innerText = "Olá, eu sou um parágrafo";

section1.appendChild(p1);

// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let section2 = document.createElement("section");
section2.className = "left-content";

main.appendChild(section2);