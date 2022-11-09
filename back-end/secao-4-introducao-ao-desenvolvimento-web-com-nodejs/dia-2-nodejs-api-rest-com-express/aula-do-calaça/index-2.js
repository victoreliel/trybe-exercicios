const setTimeoutPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('O tempo passou.');
      resolve();
    }, 3000);
  })
}

const setTimeoutPromise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('O tempo passou 2.');
      resolve();
    }, 1000);
  })
}

async function main() {
  console.log('O tempo iniciou');
  await setTimeoutPromise();
  await setTimeoutPromise2();
  console.log('O tempo terminou');
}

main();