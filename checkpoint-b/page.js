// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

// Export renderItems(list), matching() and start(), as the spec describes.
// Nothing is started for you. Everything you need is in modules 00 to 13.

export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.textContent = "";

  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("goods-item");
    li.textContent = item.name;
    ul.append(li);
  }
}

export function matching() {
  return items.filter((item) => item.price < 100);
}

export function start() {
  renderItems(items);

  const button = document.querySelector("#apply");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}
if (typeof window !== "undefined" && window.location.protocol === "http:") {
  start();
}

