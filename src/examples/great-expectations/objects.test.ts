import { expect, test, describe } from "vitest";

describe("toBe", () => {
  test.fails("objects should not be strictly equal", () => {
    expect({ a: 1 }).toBe({ a: 1 });
  });

  test.fails("arrays should be strictly equal", () => {
    expect([1, 2, 3]).toBe([1, 2, 3]);
  });
  test.fails("functions should to be strictly equal", () => {
    expect(() => {}).toBe(() => {});
  });
});
