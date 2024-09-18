import Book from "./Book";
import { expect, test } from "vitest";

test("default constructed values", () => {
  const agot = new Book("A Game of Thrones", "George R. R. Martin", 694, true);
  expect(agot.info()).toBe(
    "A Game of Thrones by George R. R. Martin, 694 pages, read"
  );
});
