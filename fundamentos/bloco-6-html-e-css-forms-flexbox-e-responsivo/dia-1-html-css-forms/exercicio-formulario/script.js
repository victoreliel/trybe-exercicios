const submitButton = document.getElementById('submit-button');
const clearButton = document.getElementById('clear-button');
const checkBox2 = document.getElementById('checkbox-2');

function validation() {
  const name = document.querySelector('#name').value.length;
  const invalidName = name < 10 || name > 40;

  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const textArea = document.querySelector('#text-area').value.length;
  const invalidTextArea = textArea > 500;

  if (invalidName || invalidEmail || invalidTextArea) {
    return false;
  } else {
    return true;
  }
}

validation();

function alert(event) {
  event.preventDefault();
  const validation = validation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

submitButton.addEventListener('click', alert());