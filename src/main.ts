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
  div.classList.add("px-8");
  div.classList.add("grid");
  div.classList.add("auto-rows-auto");
  div.classList.add("grid-cols-3");
  div.classList.add("gap-6");
  main.appendChild(div);

  myLibrary.forEach((book) => {
    div.appendChild(renderBook(book));
  });
}

const renderParent = () => {
  const parent = document.createElement("div");
  parent.classList.add("bg-white");
  parent.classList.add("border");
  parent.classList.add("rounded-md");
  parent.classList.add("my-2");
  parent.classList.add("p-2");
  parent.classList.add("flex");
  parent.classList.add("flex-col");
  parent.classList.add("items-center");

  return parent;
};

const renderTitle = () => {
  return document.createElement("p");
};

const renderAuthor = () => {
  return document.createElement("p");
};

const renderPageCount = () => {
  return document.createElement("p");
};

const renderStatus = () => {
  return document.createElement("p");
};

function renderBook(book: Book) {
  const parent = renderParent();
  const title = renderTitle();
  const author = renderAuthor();
  const pages = renderPageCount();
  const status = renderStatus();

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.numberOfPages.toString();

  const isRead = () => {
    if (book.isRead) {
      return "Read";
    } else {
      return "Unread";
    }
  };

  status.textContent = isRead();

  parent.appendChild(title);
  parent.appendChild(author);
  parent.appendChild(pages);
  parent.appendChild(status);

  return parent;
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
