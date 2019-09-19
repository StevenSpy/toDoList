const button = document.querySelector("submit");
const input = document.querySelector("userInput");
const ul = document.querySelector("ul");
const li = document.createElement("li");

function inputLength() {
  return input.value.length;
}

function resetInput() {
  input.value = "";
}

function addTextNode() {
  li.insertAdjacentText("beforeend", document.createTextNode(input.value));
}

function insertLiToUl() {
  ul.insertAdjacentElement("beforeend", "li");
}

function createListElement(){
  function addTextNode ();
  function insertLiToUl ();
  function resetInput ();
}

function addListAfterClick (){
  inputLength () > 0?createListElement();
}

function addListAfterEnterPress (event){
  inputLength () > 0 && event.keyCode === 13 ? createListElement ();
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnterPress);