// Parte I

// 1
document.getElementById("elementoOndeVoceEsta");

// 2
const pai = document.getElementById("elementoOndeVoceEsta").parentNode;
pai.style.color = "green";

// 3
document.getElementById("primeiroFilhoDoFilho").innerText = "filho do filho";

// 4
document.getElementById("pai").firstElementChild;

// 5
document.getElementById("elementoOndeVoceEsta").previousElementSibling;

// 6
document.getElementById("elementoOndeVoceEsta").nextSibling;

// 7
document.getElementById("elementoOndeVoceEsta").nextElementSibling;

// 8
document.getElementById("pai").lastElementChild.previousElementSibling;


// Parte II

// 1
let novoFilhoDoPai = document.createElement("section");
novoFilhoDoPai.innerText = "ablublabla";
novoFilhoDoPai.id = "sumiu";

pai.appendChild(novoFilhoDoPai);

// 2
let filho = document.getElementById("elementoOndeVoceEsta");

let novoFilhoDoFilho = document.createElement("section");
novoFilhoDoFilho.innerText = "gugudada";
novoFilhoDoFilho.id = "someDaquiMeu";

filho.appendChild(novoFilhoDoFilho);

// 3
let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");

let filhoDoFilhoDoFilho = document.createElement("section");
filhoDoFilhoDoFilho.innerText = "aaaaaaaaaaaaaaaa";

primeiroFilhoDoFilho.appendChild(filhoDoFilhoDoFilho);

// 4
filhoDoFilhoDoFilho.id = "nao-aguento-mais"

document.getElementById("nao-aguento-mais").parentNode.parentNode.nextElementSibling;


// Parte III

let paiDoPai = document.getElementById("paiDoPai");
pai.removeChild(primeiroFilho);

filho.removeChild(segundoEUltimoFilhoDoFilho);
filho.removeChild(someDaquiMeu);

pai.removeChild(terceiroFilho);
pai.removeChild(quartoEUltimoFilho);
pai.removeChild(sumiu);