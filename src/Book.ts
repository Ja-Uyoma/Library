export class Book {
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
