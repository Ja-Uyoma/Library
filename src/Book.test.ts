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
});
