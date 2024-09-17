import Book from "./Book.ts";

let myLibrary: Book[] = [
  new Book("A Game of Thrones", "George R. R. Martin", 694, true),
  new Book("A Clash of Kings", "George R. R. Martin", 761, true),
  new Book("A Storm of Swords", "George R. R. Martin", 973, true),
  new Book("A Feast for Crows", "George R. R. Martin", 753, true),
  new Book("A Dance with Dragons", "George R. R. Martin", 1016, true),
];

function displayLibrary() {
  const main: HTMLElement = document.querySelector("main")!;
  const div: HTMLDivElement = document.createElement("div");
  main.appendChild(div);

  myLibrary.forEach((book) => {
    const p = document.createElement("p");
    p.textContent = book.info();
    div.appendChild(p);
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
  const book = createBook(formData);
  myLibrary.push(book);

  clearScreen();
  displayLibrary();

  dialog.close();
});

function clearScreen() {
  const main: HTMLElement = document.querySelector("main")!;
  const div: HTMLDivElement = document.querySelector("main > div")!;

  main.removeChild(div);
}

function createBook(formData: FormData) {
  const title = formData.get("title")!.toString();
  const author = formData.get("author")!.toString();
  const pages = Number.parseInt(formData.get("page-count")!.toString());
  const read = formData.get("read-or-unread")!.toString();

  return new Book(title, author, pages, read === "Read" ? true : false);
}
