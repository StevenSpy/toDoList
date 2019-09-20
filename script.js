const button = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
let li;

function inputLength() {
  return input.value.length;
}

function createNewLi() {
  li = document.createElement("li");
}

function resetInput() {
  input.value = "";
}

function addTextNode() {
  li.appendChild(
    document.createTextNode(
      input.value.charAt(0).toUpperCase() +
        input.value.substr(1).toLocaleLowerCase()
    )
  );
}

function insertLiToUl() {
  ul.insertAdjacentElement("beforeend", li);
}

function createListElement() {
  createNewLi();
  addTextNode();
  insertLiToUl();
  resetInput();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterEnterPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnterPress);
