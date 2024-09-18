import { Book, createBookFromFormData } from "./Book.ts";
import { createGrid, createBookCard, createDeleteButton } from "./dom.ts";

let myLibrary: Book[] = [
  new Book("A Game of Thrones", "George R. R. Martin", 694, true),
  new Book("A Clash of Kings", "George R. R. Martin", 761, true),
  new Book("A Storm of Swords", "George R. R. Martin", 973, true),
  new Book("A Feast for Crows", "George R. R. Martin", 753, true),
  new Book("A Dance with Dragons", "George R. R. Martin", 1016, true),
];

const main: HTMLElement = document.querySelector("main")!;

function renderLibrary() {
  const grid = createGrid();
  grid.id = "grid";
  main.appendChild(grid);

  myLibrary.forEach((book) => {
    const card = createBookCard(book);
    const btn = createDeleteButton();

    btn.addEventListener("click", () => {
      let target = myLibrary.findIndex((item) => item.id === book.id);
      myLibrary.splice(target, 1);
      refresh();
    });

    card.appendChild(btn);
    grid.appendChild(card);
  });
}

const button: HTMLButtonElement = document.querySelector(
  "main > div > button"
)!;
const dialog: HTMLDialogElement = document.querySelector("main > dialog")!;

button.addEventListener("click", () => {
  dialog.showModal();
});

renderLibrary();

const form = document.querySelector("form")!;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const book = createBookFromFormData(formData);
  myLibrary.push(book);

  refresh();

  dialog.close();
});

function clearScreen() {
  const grid = document.querySelector("div#grid")!;

  main.removeChild(grid);
}

const refresh = () => {
  clearScreen();
  renderLibrary();
};
