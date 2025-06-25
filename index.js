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

  const message = document.createElement("label");
  message.textContent = "Add a number tot he bank:";
  form.appendChild(message);

  const input = document.createElement("input");
  input.type = "number";
  form.appendChild(input);

  const addButton = document.createElement("button");
  addButton.textContent = "Add number";
  form.appendChild(addButton);

  const sortOne = document.createElement("button");
  sortOne.textContent = "Sort 1";
  form.appendChild(sortOne);

  const sortAll = document.createElement("button");
  sortAll.textContent = "Sort All";
  form.appendChild(sortAll);

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
