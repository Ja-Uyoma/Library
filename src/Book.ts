export class Book {
  private m_id: number = 1;
  private m_title: string = "";
  private m_author: string = "";
  private m_numberOfPages: number = 0;
  private m_isRead: boolean = false;

  constructor(
    title: string,
    author: string,
    numberOfPages: number,
    isRead: boolean
  ) {
    this.m_title = title;
    this.m_author = author;
    this.m_numberOfPages = numberOfPages;
    this.m_isRead = isRead;
  }

  public get id(): number {
    return this.m_id;
  }

  public get title(): string {
    return this.m_title;
  }

  public get author(): string {
    return this.m_author;
  }

  public get numberOfPages(): number {
    return this.m_numberOfPages;
  }

  public get isRead(): boolean {
    return this.m_isRead;
  }

  info(): string {
    let readStatus = null;

    if (this.m_isRead) {
      readStatus = "read";
    } else {
      readStatus = "not yet read";
    }

    return `${this.m_title} by ${this.m_author}, ${this.m_numberOfPages} pages, ${readStatus}`;
  }
}

export const createBookFromFormData = (formData: FormData) => {
  const title = formData.get("title")!.toString();
  const author = formData.get("author")!.toString();
  const pages = Number.parseInt(formData.get("page-count")!.toString());
  const read = formData.get("read-or-unread")!.toString();

  return new Book(title, author, pages, read === "Read" ? true : false);
};
