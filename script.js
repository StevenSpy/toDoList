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
  li.insertAdjacentText("beforeend", `input.value`);
}

function insertLiToUl() {
  ul.insertAdjacentElement("beforeend", "li");
}
