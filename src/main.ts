import { Book, createBookFromFormData } from "./Book.ts";
import { createGrid, createBookCard } from "./dom.ts";

let myLibrary: Book[] = [
  new Book("A Game of Thrones", "George R. R. Martin", 694, true),
  new Book("A Clash of Kings", "George R. R. Martin", 761, true),
  new Book("A Storm of Swords", "George R. R. Martin", 973, true),
  new Book("A Feast for Crows", "George R. R. Martin", 753, true),
  new Book("A Dance with Dragons", "George R. R. Martin", 1016, true),
];

const main: HTMLElement = document.querySelector("main")!;

function displayLibrary() {
  const grid = createGrid();
  main.appendChild(grid);

  myLibrary.forEach((book) => {
    grid.appendChild(createBookCard(book));
  });
}

const button: HTMLButtonElement = document.querySelector("main > button")!;
const dialog: HTMLDialogElement = document.querySelector("main > dialog")!;

button.addEventListener("click", () => {
  dialog.showModal();
});

displayLibrary();

const form = document.querySelector("form")!;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const book = createBookFromFormData(formData);
  myLibrary.push(book);

  clearScreen();
  displayLibrary();

  dialog.close();
});

function clearScreen() {
  const div: HTMLDivElement = document.querySelector("main > div")!;

  main.removeChild(div);
}
