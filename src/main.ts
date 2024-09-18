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
  const grid = createGrid();
  main.appendChild(grid);

  myLibrary.forEach((book) => {
    grid.appendChild(renderBook(book));
  });
}

const createGrid = () => {
  const grid = document.createElement("div");

  grid.classList.add("px-8");
  grid.classList.add("grid");
  grid.classList.add("auto-rows-auto");
  grid.classList.add("grid-cols-3");
  grid.classList.add("gap-6");

  return grid;
};

const createBookContainer = () => {
  const div = document.createElement("div");
  div.classList.add("bg-white");
  div.classList.add("border");
  div.classList.add("rounded-md");
  div.classList.add("my-2");
  div.classList.add("p-2");
  div.classList.add("flex");
  div.classList.add("flex-col");
  div.classList.add("items-center");
  div.classList.add("gap-2");
  div.classList.add("font-medium");
  div.classList.add("text-lg");
  div.classList.add("text-slate-800");

  return div;
};

const createTitleElement = () => {
  return document.createElement("p");
};

const createAuthorElement = () => {
  return document.createElement("p");
};

const createPageCountElement = () => {
  return document.createElement("p");
};

const createStatusElement = () => {
  const status = document.createElement("button");
  status.classList.add("bg-green-500");
  status.classList.add("rounded-2xl");
  status.classList.add("px-6");
  status.classList.add("py-1");
  status.classList.add("active:shadow-lg");
  status.classList.add("active:scale-95");
  status.classList.add("outline-none");
  status.classList.add("transition");
  status.classList.add("duration-100");
  status.classList.add("ease-in-out");
  status.classList.add("hover:border-y-sky-800");
  status.classList.add("font-medium");
  status.classList.add("text-white");

  status.addEventListener("click", () => {
    const current = status.textContent;

    if (current === "Read") {
      status.textContent = "Unread";
      status.classList.remove("bg-green-500");
      status.classList.add("bg-red-500");
    } else if (current === "Unread") {
      status.textContent = "Read";
      status.classList.remove("bg-red-500");
      status.classList.add("bg-green-500");
    }
  });

  return status;
};

const renderDeleteButton = () => {
  const btn = document.createElement("button");

  btn.classList.add("bg-sky-500");
  btn.classList.add("rounded-2xl");
  btn.classList.add("px-6");
  btn.classList.add("py-1");
  btn.classList.add("active:shadow-lg");
  btn.classList.add("active:scale-95");
  btn.classList.add("outline-none");
  btn.classList.add("transition");
  btn.classList.add("duration-100");
  btn.classList.add("ease-in-out");
  btn.classList.add("hover:border-y-sky-800");
  btn.classList.add("font-medium");
  btn.classList.add("text-white");

  return btn;
};

function renderBook(book: Book) {
  const parent = createBookContainer();
  const title = createTitleElement();
  const author = createAuthorElement();
  const pages = createPageCountElement();
  const status = createStatusElement();
  const deleteBtn = renderDeleteButton();

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.numberOfPages.toString() + " Pages";

  const isRead = () => {
    if (book.isRead) {
      return "Read";
    } else {
      return "Unread";
    }
  };

  status.textContent = isRead();
  deleteBtn.textContent = "Delete";

  parent.appendChild(title);
  parent.appendChild(author);
  parent.appendChild(pages);
  parent.appendChild(status);
  parent.appendChild(deleteBtn);

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
