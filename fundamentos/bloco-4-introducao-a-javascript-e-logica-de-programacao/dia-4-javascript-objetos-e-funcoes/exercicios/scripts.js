// Parte I - Objetos e For/in


let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};


// Exercício 1

// console.log('Bem-vinda, ' + info['personagem']);


// Exercício 2

info['recorrente'] = 'Sim';

// console.log(info);


// Exercício 3

// for (key in info) {
//   console.log(key);
// }


// Exercício 4

// for (key in info) {
//   console.log(info[key]);
// }


// Exercício 5

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}

// console.log(info['personagem'] + ' e ' + info2['personagem']);
// console.log(info['origem'] + ' e ' + info2['origem']);
// console.log(info['nota'] + ' e ' + info2['nota']);
// if (info.recorrente === info2.recorrente) {
//   console.log('Ambas Recorrentes');
// }


// Exercício 6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// leitor['nomeCompleto'] = leitor.nome + ' ' + leitor.sobrenome;
// console.log('O livro favorito de ' + leitor['nomeCompleto'] + ' se chama ' + "'" + leitor['livrosFavoritos'][0]['titulo'] + "'");


// Exercício 7

leitor['livrosFavoritos'][1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}


// Exercício 8

// console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos');



// Parte II - Funções


