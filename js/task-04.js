let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector("#value");

decrementBtn.addEventListener("click", makeDecrement);
incrementBtn.addEventListener("click", makeIncrementt);

const updateCounter = () => {
  valueSpan.textContent = counterValue;
};

function makeDecrement() {
  counterValue -= 1;
  updateCounter();
}

function makeIncrementt() {
  counterValue += 1;
  updateCounter();
}

updateCounter();
