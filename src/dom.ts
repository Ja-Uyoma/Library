import { Book } from "./Book";

export const createGrid = () => {
  const grid = document.createElement("div");

  grid.classList.add("px-8");
  grid.classList.add("grid");
  grid.classList.add("auto-rows-auto");
  grid.classList.add("grid-cols-3");
  grid.classList.add("gap-6");

  return grid;
};

const createParentElement = () => {
  const div = document.createElement("div");

  div.classList.add("bg-white");
  div.classList.add("border");
  div.classList.add("rounded-lg");
  div.classList.add("my-2");
  div.classList.add("p-4");
  div.classList.add("flex");
  div.classList.add("flex-col");
  div.classList.add("items-center");
  div.classList.add("gap-2");
  div.classList.add("font-medium");
  div.classList.add("text-lg");
  div.classList.add("text-slate-800");

  return div;
};

const createTitleElement = (bookTitle: string) => {
  const title = document.createElement("p");
  title.textContent = bookTitle;
  return title;
};

const createAuthorElement = (bookAuthor: string) => {
  const author = document.createElement("p");
  author.textContent = bookAuthor;
  return author;
};

const createPageCountElement = (pages: number) => {
  const count = document.createElement("p");
  count.textContent = pages.toString() + " Pages";
  return count;
};

const createStatusElement = (isRead: boolean) => {
  const status = document.createElement("button");
  status.textContent = isRead ? "Read" : "Unread";

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

export const createDeleteButton = () => {
  const btn = document.createElement("button");
  btn.textContent = "Delete";

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

export const createBookCard = (book: Book) => {
  const parent = createParentElement();
  const title = createTitleElement(book.title);
  const author = createAuthorElement(book.author);
  const pages = createPageCountElement(book.numberOfPages);
  const status = createStatusElement(book.isRead);

  parent.appendChild(title);
  parent.appendChild(author);
  parent.appendChild(pages);
  parent.appendChild(status);

  return parent;
};
