import Book from "./Book";
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
});
