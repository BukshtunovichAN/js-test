const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};
refs.span.style.fontSize = refs.input.value + "px";

refs.input.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  //   console.log(event.target.value);
  refs.span.style.fontSize = event.target.value + "px";
}
