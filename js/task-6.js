function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlBox = document.querySelector("div#controls");
const divBoxes = document.querySelector("div#boxes");
const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

function createBoxes() {
  let inputValue = Number(input.value);
  divBoxes.innerHTML = "";
  console.log(inputValue);
  if (inputValue > 0 && inputValue <= 100 && typeof inputValue === "number") {
    for (let index = 0; index < inputValue; index++) {
      divBoxes.append(document.createElement("div"));
      divBoxes.lastChild.style.backgroundColor = getRandomHexColor();
      divBoxes.lastChild.style.width = `${30 + index * 10}px`;
      divBoxes.lastChild.style.height = `${30 + index * 10}px`;
    }
    input.value = "";
  } else {
    input.value = "";
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
