class Book {
  title: string = "";
  author: string = "";
  numberOfPages: number = 0;
  isRead: boolean = false;

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