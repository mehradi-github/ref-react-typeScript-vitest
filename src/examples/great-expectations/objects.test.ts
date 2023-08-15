import { expect, test, describe } from "vitest";

describe("toBe", () => {
  test("objects should not be strictly equal", () => {
    expect({ a: 1 }).not.toBe({ a: 1 });
  });
});
