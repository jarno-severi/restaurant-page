// Private variables and functions
const body = document.body;
const content = document.querySelector("#content");

const container = () => {
  const div = document.createElement("div");
  div.id = 'container';
  return div;
}

function createText(el, text = "") {
  el = document.createElement(el);
  el.textContent = text;
  return el;
}

function createNav(...items) {
  const ul = document.createElement("ul");
  ul.id = "navigation";
  items.forEach((item) => {
    let el = item.toLowerCase();
    el = document.createElement("li");
    el.textContent = item;
    ul.appendChild(el);
  });
  return ul;
}

// Export
const init = () => {
  content.appendChild(createText("h1", "My Restaurant"));
  content.appendChild(createNav("Home", "Menu", "Contact"));
  body.appendChild(container());
};
// const container = () => document.querySelector("#container");

export { init };
