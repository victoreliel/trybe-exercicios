const wake = () => {
  return `Acordando!!`;
}

const coffee = () => {
  return `Bora tomar café!!`;
}

const sleep = () => {
  return `Partiu dormir!!`;
}

const doingThings = (func) => func();

console.log(doingThings(sleep));