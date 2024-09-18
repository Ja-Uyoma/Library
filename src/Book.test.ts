import { Book } from "./Book";
import { describe, expect, test } from "vitest";

describe("Book", () => {
  test("default constructed values", () => {
    const agot = new Book(
      "A Game of Thrones",
      "George R. R. Martin",
      694,
      true
    );
    expect(agot.info()).toBe(
      "A Game of Thrones by George R. R. Martin, 694 pages, read"
    );
  });

  test("method title gets the book title", () => {
    const agot = new Book(
      "A Game of Thrones",
      "George R. R. Martin",
      694,
      true
    );

    expect(agot.title).toBe("A Game of Thrones");
  });

  test("method author gets the book author", () => {
    const agot = new Book(
      "A Game of Thrones",
      "George R. R. Martin",
      694,
      true
    );

    expect(agot.author).toBe("George R. R. Martin");
  });

  test("method numberOfPages gets the book's page count", () => {
    const agot = new Book(
      "A Game of Thrones",
      "George R. R. Martin",
      694,
      true
    );

    expect(agot.numberOfPages).toBe(694);
  });

  test("method isRead tells whether the book has been read or not", () => {
    const agot = new Book(
      "A Game of Thrones",
      "George R. R. Martin",
      694,
      true
    );

    expect(agot.isRead).toBe(true);
  });
});
