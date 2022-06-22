const check = (chute, sorteio) => chute === sorteio;

const loteria = (chute, callback) => {
  const sorteio = Math.floor((Math.random() * 5) + 1);

  return callback(chute, sorteio) ? 'Parabéns, você ganhou!' : 'Tente novamente';
};

console.log(loteria(5, check));
