const submitButton = document.getElementById('submit-button');
const clearButton = document.getElementById('clear-button');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
});

clearButton.addEventListener('click', (event) => {
  document.getElementsByClassName('field').value='';
});
