import Book from "./Book.ts";

let myLibrary: Book[] = [
  new Book("A Game of Thrones", "George R. R. Martin", 694, true),
  new Book("A Clash of Kings", "George R. R. Martin", 761, true),
  new Book("A Storm of Swords", "George R. R. Martin", 973, true),
  new Book("A Feast for Crows", "George R. R. Martin", 753, true),
  new Book("A Dance with Dragons", "George R. R. Martin", 1016, true),
];

function displayLibrary() {
  const main = document.querySelector("main");

  myLibrary.forEach((book) => {
    const p = document.createElement("p");
    p.textContent = book.info();
    main?.appendChild(p);
  });
}

const button = document.querySelector("main > button");
const dialog = document.querySelector("main > dialog");

if (button !== null && dialog !== null) {
  button.addEventListener("click", () => {
    console.log("Button clicked!");
    dialog.showModal();
  });
}

displayLibrary();
