import { expect, test, describe } from "vitest";

describe("toBe", () => {
  test.fails("objects should not be strictly equal", () => {
    expect({ a: 1 }).toBe({ a: 1 });
  });
});
