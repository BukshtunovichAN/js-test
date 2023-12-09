const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", changeColor);

function changeColor(event) {
  console.log(event.target.value.length);
  console.log(event.target.value.length);

  event.target.value.length == 6
    ? setValid(refs.input)
    : setInvalid(refs.input);
}

function setValid(input) {
  input.classList.remove("invalid");
  input.classList.add("valid");
}

function setInvalid(input) {
  input.classList.remove("valid");
  input.classList.add("invalid");
}
