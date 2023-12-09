function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  box: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", () => {
  const amount = refs.input.value;
  createBoxes(amount);
});
refs.btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    const size = 30 + i * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    refs.box.prepend(div);
  }
}

function destroyBoxes() {
  refs.box.innerHTML = "";
}
