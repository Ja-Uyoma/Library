class Book {
  private title: string = "";
  private author: string = "";
  private numberOfPages: number = 0;
  private isRead: boolean = false;

  constructor(title: string, author: string, numberOfPages: number, isRead: boolean) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
  }

  info(): string {
    let readStatus = null;

    if (this.isRead) {
      readStatus = "read";
    }
    else {
      readStatus = "not yet read";
    }

    return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${readStatus}`;
  }
}
