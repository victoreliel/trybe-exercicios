// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preventDefault(event) {
  event.preventDefault();
}

HREF_LINK.addEventListener('click', preventDefault);

INPUT_CHECKBOX.addEventListener('click', preventDefault);

INPUT_TEXT.addEventListener('keypress', (event) => {
  const letra = event.key;
  if (letra !== 'a') {
    event.preventDefault();
  }
});