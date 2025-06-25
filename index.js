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
  message.textContent = "Add a number to the bank:";
  form.appendChild(message);

  const input = document.createElement("input");
  input.type = "number";
  form.appendChild(input);

  const addButton = document.createElement("button");
  addButton.textContent = "Add number";
  addButton.addEventListener("click", () => {
    addNumber();
    render();
  });
  form.appendChild(addButton);

  const sortOne = document.createElement("button");
  sortOne.textContent = "Sort 1";
  sortOne.addEventListener("click", () => {
    sortOneNumber();
    render();
  });
  form.appendChild(sortOne);

  const sortAll = document.createElement("button");
  sortAll.textContent = "Sort All";
  sortAll.addEventListener("click", () => {
    sortAllNumbers();
    render();
  });
  form.appendChild(sortAll);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;
    addNumber(value);
    input.value = "";
  });

  return form;
}

function sortOneNumber() {}

function sortAllNumbers() {}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Odds and Evens";
  app.appendChild(title);
  app.appendChild(interface());
}
render();
