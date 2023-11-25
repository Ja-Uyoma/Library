class Book {
    /**
     * Create a new Book object
     * @param {string} title The title of the book
     * @param {string} author The author of the book
     * @param {number} numberOfPages The number of pages of the book
     * @param {boolean} isRead Whether the book has been read or not
     */
    constructor(title, author, numberOfPages, isRead) {
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.isRead = isRead;
        this.info = () => {
            const readState = isRead ? "read" : "not read yet";
            return `${title} by ${author}, ${numberOfPages} pages, ${readState}`;
        };
    }
}