const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correcao = (gabarito, respostas) => {
  if (gabarito === respostas) {
    return 1;
  } else if (gabarito === 'N.A') {
    return 0;
  } else {
    return -0.5;
  }
}

const contador = (gabarito, respostas, action) => {
  let pontos = 0;

  for (let i = 0; i < gabarito.length; i += 1) {
    const actionReturn = action(gabarito[i], respostas[i]);
    pontos += actionReturn;
  }
  return `Resultado final: ${pontos} pontos`;
};

console.log(contador(RIGHT_ANSWERS, STUDENT_ANSWERS, correcao));
