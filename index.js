let numbers = [];
let odds = [];
let evens = [];

function addNumber(number) {
  if (typeof number == "number") {
    numbers.push(number);
    render();
  }
}

function interface() {
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.textContent = "Add a number tot he bank:";
  form.appendChild(input);

  return form;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Odds and Evens";
  app.appendChild(title);
  app.appendChild(interface());
}
render();
