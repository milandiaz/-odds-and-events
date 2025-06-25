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
  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(input.value);
    if (!isNaN(value)) {
      addNumber(value);
      input.value = "";
    }
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

function sortOneNumber() {
  const number = numbers.shift();

  if (number % 2 == 0) {
    evens.push(number);
  } else {
    odds.push(number);
  }
}

function sortAllNumbers() {
  while (numbers.length > 0) {
    sortOneNumber();
  }
}

function bankBox() {
  const container = document.createElement("div");
  container.innerHTML = `
    <h2>Bank</h2>
    <div style="
      border: 1px solid #444; 
      border-radius: 6px; 
      padding: 12px; 
      margin-bottom: 20px;
    ">
      ${numbers.join(" ")}
    </div>
  `;

  return container;
}

function oddsBox() {
  const container = document.createElement("div");
  container.innerHTML = `
    <h2>Odds</h2>
    <div style="
      border: 1px solid #444; 
      border-radius: 6px; 
      padding: 12px; 
      margin-bottom: 20px;
    ">
      ${odds.join(" ")}
    </div>
  `;

  return container;
}

function evensBox() {
  const container = document.createElement("div");
  container.innerHTML = `
    <h2>Evens</h2>
    <div style="
      border: 1px solid #444; 
      border-radius: 6px; 
      padding: 12px; 
      margin-bottom: 20px;
    ">
      ${evens.join(" ")}
    </div>
  `;

  return container;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Odds and Evens";
  app.appendChild(title);
  app.appendChild(interface());
  app.appendChild(bankBox());
  app.appendChild(oddsBox());
  app.appendChild(evensBox());

  console.log(numbers);
}
render();
