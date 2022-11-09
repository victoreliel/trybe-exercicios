const axios = require('axios');

async function main() {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1');

  console.log(`Pokemon: ${response.data.name.toUpperCase()}`);
}

main();