const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (objeto, chave, valor) => {
  objeto[chave] = valor;
};

addTurno(lesson2, 'turno', 'Noite');

console.table(lesson2);

const listaKeys = (objeto) => Object.keys(objeto);

console.log(listaKeys(lesson1));


